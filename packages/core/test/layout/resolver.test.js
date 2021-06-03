import { expect } from '@open-wc/testing';
import layoutResolver from '../../src/layout/resolver.js';

describe('layout resolver', () => {
  [
    'box-decoration-break',
    'box-sizing',
    'clear',
    'container',
    'display',
    'float',
    'inset',
    'isolation',
    'object-fit',
    'object-position',
    'overflow',
    'overscroll-behavior',
    'position',
    'visibility',
    'z-index',
  ].forEach(key => {
    it(`should have rules for ${key}`, async () => {
      const rules = layoutResolver[key]();

      expect(rules).to.not.be.undefined;
    });
  });
});
