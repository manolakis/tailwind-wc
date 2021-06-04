import { expect } from '@open-wc/testing';
import typographyResolver from '../../src/typography/resolver.js';

describe('spacing resolver', () => {
  [
    'font-family',
    'font-size',
    'font-smoothing',
    'font-style',
    'font-variant-numeric',
    'font-weight',
    'letter-spacing',
    'line-height',
    'list-style-type',
    'list-style-position',
    'placeholder-colors',
    'placeholder-opacity',
    'text-align',
    'text-color',
    'text-decoration',
    'text-opacity',
    'text-overflow',
    'text-transform',
    'vertical-align',
    'whitespace',
    'word-break',
  ].forEach(key => {
    it(`should have rules for ${key}`, async () => {
      const rules = typographyResolver[key]();

      expect(rules).to.not.be.undefined;
    });
  });
});
