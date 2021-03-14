import { expect } from '@open-wc/testing';
import { pseudoClassVariants } from '../../src/core/pseudoClassVariants.js';

describe('pseudoClassVariants', () => {
  it('should be strings', () => {
    Object.entries(pseudoClassVariants).forEach(([, value]) => {
      expect(typeof value).to.be.equal('string');
    });
  });
});
