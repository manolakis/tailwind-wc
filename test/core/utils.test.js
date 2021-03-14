import { expect } from '@open-wc/testing';
import { camelize, interpolate, escape, combine } from '../../src/core/utils.js';

describe('camelize', () => {
  Object.entries({
    'focus-within': 'focusWithin',
    'this-is-an-example': 'thisIsAnExample',
  }).forEach(([input, output]) => {
    it(`should change ${input} into ${output}`, () => {
      expect(camelize(input)).to.be.equal(output);
    });
  });
});

describe('interpolate', () => {
  it(`should interpolate a template literal`, () => {
    const sample = 'test';

    expect(interpolate`this is a ${sample}`).to.be.equal('this is a test');
  });

  it(`should interpolate a template literal with a list of items`, () => {
    const items = ['- one', '- two', '- three'];

    expect(interpolate`item list:\n\t${items}`).to.be.equal(
      `item list:\n\t- one\n\t- two\n\t- three`,
    );
  });
});

describe('escape', () => {
  it('should not modify names that starts with a letter', () => {
    expect(escape('md\\:font-bold')).to.be.equal('md\\:font-bold');
  });

  it('should escape names that starts with a number', () => {
    expect(escape('2xl\\:font-bold')).to.be.equal('\\32 xl\\:font-bold');
  });
});

describe('combine', () => {
  it('should return a single group of items', () => {
    expect(combine(['A', 'B'])).to.be.eql(['A', 'B']);
  });

  it('should combine two groups of items', () => {
    expect(combine(['A', 'B'], ['C', 'D'])).to.be.eql(['A', 'B', 'C:A', 'C:B', 'D:A', 'D:B']);
  });

  it('should combine multiple groups of items', () => {
    expect(combine(['A', 'B'], ['C', 'D'], ['E', 'F'])).to.be.eql([
      'A',
      'B',
      'C:A',
      'C:B',
      'D:A',
      'D:B',
      'E:A',
      'E:B',
      'E:C:A',
      'E:C:B',
      'E:D:A',
      'E:D:B',
      'F:A',
      'F:B',
      'F:C:A',
      'F:C:B',
      'F:D:A',
      'F:D:B',
    ]);
  });
});
