import { expect } from '@open-wc/testing';
import sizingResolver from '../../src/sizing/resolver.js';

describe('sizing resolver', () => {
  ['height', 'min-height', 'max-height', 'width', 'min-width', 'max-width'].forEach(key => {
    it(`should have rules for ${key}`, async () => {
      const rules = sizingResolver[key]();

      expect(rules).to.not.be.undefined;
    });
  });
});
