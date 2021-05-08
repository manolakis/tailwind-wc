import { expect } from '@open-wc/testing';
import { css4wc } from '../../src/css4wc.js';

describe('overscroll', () => {
  it('should generate the following css rules', async () => {
    const rules = css4wc()('overscroll', [
      'first',
      'last',
      'odd',
      'even',
      'visited',
      'checked',
      'focus-within',
      'hover',
      'focus',
      'focus-visible',
      'active',
      'disabled',
      'motion-reduce',
      'motion-safe',
      'responsive',
    ]);

    const dataUrl = new URL('./overscroll.css.json', import.meta.url);
    const response = await fetch(dataUrl);
    const json = await response.json();

    expect(rules).to.be.eql(json);
  });
});
