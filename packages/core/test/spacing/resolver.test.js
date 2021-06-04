import { expect } from '@open-wc/testing';
import spacingResolver from '../../src/spacing/resolver.js';

describe('spacing resolver', () => {
  ['padding', 'margin', 'space'].forEach(key => {
    it(`should have rules for ${key}`, async () => {
      const rules = spacingResolver[key]();

      expect(rules).to.not.be.undefined;
    });
  });
});
