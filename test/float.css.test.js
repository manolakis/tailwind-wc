import { expect } from '@open-wc/testing';
import float from '../src/float.css.js';

describe('float', () => {
  it('should generate the following css rules', async () => {
    const rules = float({
      first: true,
      last: true,
      odd: true,
      even: true,
      visited: true,
      checked: true,
      focusWithin: true,
      hover: true,
      focus: true,
      focusVisible: true,
      active: true,
      disabled: true,
      motionReduce: true,
      motionSafe: true,
      responsive: true,
    });

    const dataUrl = new URL('./float.css.json', import.meta.url);
    const response = await fetch(dataUrl);
    const json = await response.json();

    expect(rules).to.be.eql(json);
  });
});
