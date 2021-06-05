import { expect } from '@open-wc/testing';
import flexboxGridResolver from '../../src/flexbox-grid/resolver.js';

describe('flexbox and grid resolver', () => {
  [
    'align-content', 
    'align-items', 
    'align-self', 
    'col-end', 
    'col-span', 
    'col-start', 
    'flex-direction',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
    'flex',
    'gap',
    'grid-auto-cols',
    'grid-auto-rows',
    'grid-cols',
    'grid-flow',
    'grid-rows',
    'justify-content',
    'justify-items',
    'justify-self',
    'order',
    'place-content',
    'place-items',
    'place-self',
    'row-auto',
    'row-end',
    'row-span',
    'row-start'
  ].forEach(key => {
    it(`should have rules for ${key}`, async () => {
      const rules = flexboxGridResolver[key]();

      expect(rules).to.not.be.undefined;
    });
  });
});