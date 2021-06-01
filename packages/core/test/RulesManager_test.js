import { expect } from '@open-wc/testing';
import { stub as SinonStub } from 'sinon';

import { RulesManager } from '../src/RulesManager.js';
// eslint-disable-next-line import/no-named-default
import { default as layoutResolver, KEY, stub } from './mocks/layoutResolver.js';

describe('RulesManager', () => {
  it('should load layoutResolver by default', async () => {
    try {
      const rulesManager = new RulesManager();

      rulesManager.get(KEY);

      expect(stub.calledOnce).to.be.true;
    } finally {
      stub.reset();
    }
  });

  it('should be able to add new rules', async () => {
    try {
      const localStub = new SinonStub();
      const rulesManager = new RulesManager();

      rulesManager.add({
        sample: localStub,
      });

      rulesManager.get('sample');

      expect(localStub.calledOnce).to.be.true;
    } finally {
      stub.reset();
    }
  });

  it('should be able to override default rules', async () => {
    try {
      const rulesManager = new RulesManager();

      rulesManager.add({
        [KEY]: () => {},
      });

      rulesManager.get(KEY);

      expect(layoutResolver[KEY].notCalled).to.be.true;
    } finally {
      stub.reset();
    }
  });
});
