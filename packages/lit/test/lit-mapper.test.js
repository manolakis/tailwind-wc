import { expect } from '@open-wc/testing';
import { CSSResult } from 'lit';

import { tw } from '../src/lit-mapper.js';

describe('lit mapper', () => {
  it('should return a CSSResult instance', async () => {
    const list = tw('float');

    list.forEach(css => {
      expect(css).to.be.instanceof(CSSResult);
    });
  });
});
