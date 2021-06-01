import { expect } from '@open-wc/testing';
import { rules as initialRules, setRules } from '../src/rules.js';
import { RulesManager } from '../src/RulesManager.js';

describe('rules', () => {
  it('should return the ESM singleton instance', async () => {
    const { rules } = await import('../src/rules.js');

    expect(rules).to.be.equal(initialRules);
    expect(rules).to.not.be.undefined;
  });

  it('should be able to override the ESM singleton instance', async () => {
    const newRules = new RulesManager();

    setRules(newRules);

    const { rules } = await import('../src/rules.js');

    expect(rules).to.be.equal(newRules);
  });
});
