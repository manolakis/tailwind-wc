import layoutResolver from './layout/resolver.js';
import spacingResolver from './spacing/resolver.js';

export class RulesManager {
  constructor() {
    this.__ruleResolvers = new Map();

    this.add(layoutResolver);
    this.add(spacingResolver);
  }

  add(resolver) {
    Object.entries(resolver).forEach(([key, value]) => this.__ruleResolvers.set(key, value));
  }

  get(key) {
    return this.__ruleResolvers.get(key)();
  }
}
