import { expect } from '@open-wc/testing';
import { css4wc } from '../src/css4wc.js';
import { stub, KEY } from './mocks/rules.js';

describe('css4wc', () => {
  it('should call to the specific rule', async () => {
    try {
      css4wc()(KEY);

      expect(stub.calledOnce).to.be.true;
    } finally {
      stub.reset();
    }
  });

  it('should call to the rule with the variants specified', async () => {
    try {
      css4wc()(KEY, ['A', 'B']);

      const { A, B, C } = stub.firstCall.firstArg;

      expect(stub.calledOnce).to.be.true;
      expect(A).to.be.true;
      expect(B).to.be.true;
      expect(C).to.be.undefined;
    } finally {
      stub.reset();
    }
  });

  it('should add a default mapper if not specified', async () => {
    try {
      css4wc()(KEY);

      const { mapper } = stub.firstCall.firstArg;

      expect(stub.calledOnce).to.be.true;
      expect(mapper).to.not.be.undefined;
    } finally {
      stub.reset();
    }
  });

  it('should call to the specific rule with the specified variants', async () => {
    try {
      css4wc()(KEY, ['variant']);

      const { variant } = stub.firstCall.firstArg;

      expect(stub.calledOnce).to.be.true;
      expect(variant).to.be.true;
    } finally {
      stub.reset();
    }
  });
});
