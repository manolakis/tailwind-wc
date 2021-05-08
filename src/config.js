import { singletonManager } from 'singleton-manager';
import { ConfigManager } from './ConfigManager.js';

// eslint-disable-next-line import/no-mutable-exports
export let config = singletonManager.get('css4wc::ConfigManager::1.x') || new ConfigManager();

/**
 * Sets the CSS4WC config.
 *
 * @param {ConfigManager} configManager
 */
export const setConfig = configManager => {
  config = configManager;
};
