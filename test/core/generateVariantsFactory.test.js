import { expect } from '@open-wc/testing';
import { CSSRule } from '../../src/core/CSSRule.js';
import { breakpoints } from '../../src/core/breakpoints.js';
import { pseudoClassVariants } from '../../src/core/pseudoClassVariants.js';
import { generateVariantsFactory as _generateVariantsFactory } from '../../src/core/generateVariantsFactory.js';
import { camelize, combine } from '../../src/core/utils.js';

const mapper = cssRule => cssRule;
const baseRule = { className: 'sample', body: 'color: red' };
const generateVariantsFactory = ({ scope = 'test', baseRules = [baseRule] } = {}) =>
  _generateVariantsFactory(scope, baseRules);

describe('generateVariants', () => {
  it('should throw if no scope is provided', () => {
    expect(() => generateVariantsFactory({ scope: null })).to.throw();
  });

  it('should throw if scope is not a string', () => {
    expect(() => generateVariantsFactory({ scope: 34 })).to.throw();
  });

  it('should throw if scope is an empty string', () => {
    expect(() => generateVariantsFactory({ scope: '' })).to.throw();
  });

  it('should throw if the baseRules are not an array', () => {
    expect(() => generateVariantsFactory({ baseRules: 'string' })).to.throw();
  });

  it('should throw if the baseRules is an empty array', () => {
    expect(() => generateVariantsFactory({ baseRules: [] })).to.throw();
  });

  it('should throw if the baseRules contains an element different than a { className: string, body: string }', () => {
    expect(() => generateVariantsFactory({ baseRules: [baseRule, 'string'] })).to.throw();
  });

  it('should generate the base rules if no variants are specified', () => {
    const generateVariants = generateVariantsFactory();
    const [cssRule] = generateVariants({ mapper });

    expect(cssRule).to.be.eql(new CSSRule(baseRule.className, baseRule.body));
  });

  it('should generate the same object instances calling it twice', () => {
    const generateVariants = generateVariantsFactory();

    const [firstRule] = generateVariants();
    const [secondRule] = generateVariants();

    expect(firstRule).to.be.equal(secondRule);
  });

  it('should generate pseudo class variants when enabled', () => {
    const scope = 'test';
    const generateVariants = generateVariantsFactory({ scope });

    Object.keys(pseudoClassVariants).forEach(variant => {
      const variantName = camelize(variant);
      const cssRules = generateVariants({
        mapper,
        [variantName]: true,
      });

      expect(
        combine(['sample'], [variant]).reduce(
          (acc, name, index) =>
            acc && cssRules[index].className.startsWith(name.replaceAll(':', '\\:')),
          true,
        ),
      ).to.be.true;
    });
  });

  it('should generate motion-safe variant when enabled', () => {
    const scope = 'test';
    const generateVariants = generateVariantsFactory({ scope });
    const variant = 'motion-safe';
    const variantName = camelize(variant);
    const cssRules = generateVariants({
      mapper,
      [variantName]: true,
    });

    expect(
      combine(['sample'], [variant]).reduce((acc, name, index) => {
        const rule = cssRules[index];

        return acc && rule instanceof CSSRule
          ? rule.className.startsWith(name.replaceAll(':', '\\:'))
          : rule.predicate === 'prefers-reduced-motion: no-preference' &&
              rule.cssRules.reduce(
                (rulesAcc, cssRule) =>
                  rulesAcc && cssRule.className.startsWith(name.replaceAll(':', '\\:')),
                true,
              );
      }, true),
    ).to.be.true;
  });

  it('should generate motion-reduce variant when enabled', () => {
    const scope = 'test';
    const generateVariants = generateVariantsFactory({ scope });
    const variant = 'motion-reduce';
    const variantName = camelize(variant);
    const cssRules = generateVariants({
      mapper,
      [variantName]: true,
    });

    expect(
      combine(['sample'], [variant]).reduce((acc, name, index) => {
        const rule = cssRules[index];

        return acc && rule instanceof CSSRule
          ? rule.className.startsWith(name.replaceAll(':', '\\:'))
          : rule.predicate === 'prefers-reduced-motion: reduce' &&
              rule.cssRules.reduce(
                (rulesAcc, cssRule) =>
                  rulesAcc && cssRule.className.startsWith(name.replaceAll(':', '\\:')),
                true,
              );
      }, true),
    ).to.be.true;
  });

  it('should generate responsive variants when enabled', () => {
    const scope = 'test';
    const generateVariants = generateVariantsFactory({ scope });
    const variant = 'responsive';
    const cssRules = generateVariants({
      mapper,
      [variant]: true,
    });

    expect(
      combine(['sample'], Object.keys(breakpoints)).reduce((acc, name, index) => {
        const rule = cssRules[index];

        if (rule instanceof CSSRule) {
          return acc && rule.className.startsWith(name.replaceAll(':', '\\:'));
        }

        const [breakpoint] = name.split(':');

        return (
          acc &&
          rule.predicate === `min-width: ${breakpoints[breakpoint]}px` &&
          rule.cssRules.reduce(
            (rulesAcc, cssRule) =>
              rulesAcc && cssRule.className.startsWith(name.replaceAll(':', '\\:')),
            true,
          )
        );
      }, true),
    ).to.be.true;
  });

  it('should combine motion variants with responsive variants', () => {
    const scope = 'test';
    const generateVariants = generateVariantsFactory({ scope });
    const cssRules = generateVariants({
      mapper,
      motionReduce: true,
      responsive: true,
    });

    expect(
      combine(['sample'], ['motion-reduce'], Object.keys(breakpoints)).reduce(
        (acc, name, index) => {
          const rule = cssRules[index];

          if (rule instanceof CSSRule) {
            return acc && rule.className.startsWith(name.replaceAll(':', '\\:'));
          }

          const [firstVariant, secondVariant] = name.split(':');

          if (firstVariant === 'motion-reduce') {
            return (
              acc &&
              rule.predicate === 'prefers-reduced-motion: reduce' &&
              rule.cssRules.reduce(
                (rulesAcc, cssRule) =>
                  rulesAcc && cssRule.className.startsWith(name.replaceAll(':', '\\:')),
                true,
              )
            );
          }

          if (secondVariant === 'motion-reduce') {
            return (
              acc &&
              rule.predicate ===
                `(min-width: ${breakpoints[firstVariant]}px) and (prefers-reduced-motion: reduce)` &&
              rule.cssRules.reduce(
                (rulesAcc, cssRule) =>
                  rulesAcc && cssRule.className.startsWith(name.replaceAll(':', '\\:')),
                true,
              )
            );
          }

          return (
            acc &&
            rule.predicate === `min-width: ${breakpoints[firstVariant]}px` &&
            rule.cssRules.reduce(
              (rulesAcc, cssRule) =>
                rulesAcc && cssRule.className.startsWith(name.replaceAll(':', '\\:')),
              true,
            )
          );
        },
        true,
      ),
    ).to.be.true;
  });
});
