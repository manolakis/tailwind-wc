import layoutResolver from './layoutResolver.js';
import flexboxGridResolver from './flexboxGridResolver.js';

export class RulesManager {
  constructor() {
    this.__ruleResolvers = new Map();

    this.add(layoutResolver);
    this.add(flexboxGridResolver);
  }

  add(resolver) {
    Object.entries(resolver).forEach(([key, value]) => this.__ruleResolvers.set(key, value));
  }

  get(key) {
    return this.__ruleResolvers.get(key)();
  }
}
