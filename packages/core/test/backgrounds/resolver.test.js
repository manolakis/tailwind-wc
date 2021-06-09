import { expect } from '@open-wc/testing';
import backgroundsResolver from '../../src/backgrounds/resolver.js';

describe('Backgrounds resolver', () => {
  [
    'background-attachment',
    'background-clip',
    'background-color',
    'background-image',
    'background-opacity',
    'background-position',
    'background-repeat',
    'background-size',
    'gradient-color-stops',
  ].forEach(key => {
    it(`should have rules for ${key}`, async () => {
      const rules = backgroundsResolver[key]();

      expect(rules).to.not.be.undefined;
    });
  });
});
