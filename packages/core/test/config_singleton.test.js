import { expect } from '@open-wc/testing';
import { singletonManager } from 'singleton-manager';
import { ConfigManager } from '../src/ConfigManager.js';

describe('config', () => {
  it('should be able to retrieve the global singleton if specified', async () => {
    const newConfig = new ConfigManager();

    singletonManager.set('css4wc::ConfigManager::1.x', newConfig);

    const { config } = await import('../src/config.js');

    expect(config).to.be.equal(newConfig);
  });
});
