import { expect } from '@open-wc/testing';
import position from '../src/position.css.js';

describe('position', () => {
  it('should generate the following css rules', async () => {
    const rules = position({
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

    const dataUrl = new URL('./position.css.json', import.meta.url);
    const response = await fetch(dataUrl);
    const json = await response.json();

    expect(rules).to.be.eql(json);
  });
});
