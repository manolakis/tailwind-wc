import layoutResolver from './layout/resolver.js';

export class RulesManager {
  constructor() {
    this.__ruleResolvers = new Map();

    this.add(layoutResolver);
  }

  add(resolver) {
    Object.entries(resolver).forEach(([key, value]) => this.__ruleResolvers.set(key, value));
  }

  get(key) {
    return this.__ruleResolvers.get(key)();
  }
}
