import { expect } from '@open-wc/testing';
import { tailwind } from '../src/tailwind.js';
import { stub, KEY } from './mocks/rules.js';

const defaultMapper = cssRule => cssRule.toString();

describe('tw', () => {
  it('should call to the specific rule', async () => {
    try {
      tailwind(defaultMapper)(KEY);

      expect(stub.calledOnce).to.be.true;
    } finally {
      stub.reset();
    }
  });

  it('should call to the rule with the variants specified', async () => {
    try {
      tailwind(defaultMapper)(KEY, ['A', 'B']);

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
      tailwind(defaultMapper)(KEY);

      const { mapper } = stub.firstCall.firstArg;

      expect(stub.calledOnce).to.be.true;
      expect(mapper).to.not.be.undefined;
    } finally {
      stub.reset();
    }
  });

  it('should call to the specific rule with the specified variants', async () => {
    try {
      tailwind(defaultMapper)(KEY, ['variant']);

      const { variant } = stub.firstCall.firstArg;

      expect(stub.calledOnce).to.be.true;
      expect(variant).to.be.true;
    } finally {
      stub.reset();
    }
  });
});
