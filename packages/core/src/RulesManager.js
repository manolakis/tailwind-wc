import layoutResolver from './layout/resolver.js';
import flexboxGridResolver from './flexbox-grid/resolver.js';
import sizingResolver from './sizing/resolver.js';
import spacingResolver from './spacing/resolver.js';
import typographyResolver from './typography/resolver.js';

export class RulesManager {
  constructor() {
    this.__ruleResolvers = new Map();

    this.add(layoutResolver);
    this.add(flexboxGridResolver);
    this.add(sizingResolver);
    this.add(spacingResolver);
    this.add(typographyResolver);
  }

  add(resolver) {
    Object.entries(resolver).forEach(([key, value]) => this.__ruleResolvers.set(key, value));
  }

  get(key) {
    return this.__ruleResolvers.get(key)();
  }
}
