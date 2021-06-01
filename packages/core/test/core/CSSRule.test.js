import { expect } from '@open-wc/testing';
import { CSSRule } from '../../src/core/CSSRule.js';

const createCSSRule = ({ className = 'sample', body = 'color: blue' } = {}) =>
  new CSSRule(className, body);

describe('CSSRule', () => {
  it('should be constructable', () => {
    createCSSRule();
  });

  it('should throw if there is no className provided', () => {
    expect(() => createCSSRule({ className: null })).to.throw();
  });

  it('should throw if className is not a String', () => {
    expect(() => createCSSRule({ className: 34 })).to.throw();
  });

  it('should throw if className is an empty String', () => {
    expect(() => createCSSRule({ className: '' })).to.throw();
  });

  it('should throw if there is no body provided', () => {
    expect(() => createCSSRule({ body: null })).to.throw();
  });

  it('should throw if body is not a String', () => {
    expect(() => createCSSRule({ body: 34 })).to.throw();
  });

  it('should throw if body is an empty String', () => {
    expect(() => createCSSRule({ body: '' })).to.throw();
  });

  it('should create the css rule calling toString()', () => {
    const cssRule = createCSSRule();
    const { className, body } = cssRule;

    expect(cssRule.toString()).to.be.equal(`.${className} { ${body} }`);
  });
});
