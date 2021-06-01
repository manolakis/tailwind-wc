import { singletonManager } from 'singleton-manager';
import { RulesManager } from './RulesManager.js';

// eslint-disable-next-line import/no-mutable-exports
export let rules = singletonManager.get('css4wc::RulesManager::1.x') || new RulesManager();

/**
 * Sets de CSS4WC rulesManager.
 *
 * @param {RulesManager} rulesManager
 */
export const setRules = rulesManager => {
  rules = rulesManager;
};
