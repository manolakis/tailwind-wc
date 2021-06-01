import { expect } from '@open-wc/testing';
import { singletonManager } from 'singleton-manager';
import { RulesManager } from '../src/RulesManager.js';

describe('rules', () => {
  it('should be able to retrieve the global singleton if specified', async () => {
    const newRules = new RulesManager();

    singletonManager.set('css4wc::RulesManager::1.x', newRules);

    const { rules } = await import('../src/rules.js');

    expect(rules).to.be.equal(newRules);
  });
});
