import { expect } from '@open-wc/testing';
import { config as initialConfig, setConfig } from '../src/config.js';
import { ConfigManager } from '../src/ConfigManager.js';

describe('config', () => {
  it('should return the ESM singleton instance', async () => {
    const { config } = await import('../src/config.js');

    expect(config).to.be.equal(initialConfig);
    expect(config).to.not.be.undefined;
  });

  it('should be able to override the ESM singleton instance', async () => {
    const newConfig = new ConfigManager();

    setConfig(newConfig);

    const { config } = await import('../src/config.js');

    expect(config).to.be.equal(newConfig);
  });
});
