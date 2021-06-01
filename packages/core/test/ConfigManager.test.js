import { expect } from '@open-wc/testing';
import { ConfigManager } from '../src/ConfigManager.js';

describe('ConfigManager', () => {
  it('should get default breakpoints', async () => {
    const configManager = new ConfigManager();

    expect(configManager.breakpoints).to.not.be.undefined;
  });

  it('should be able to override the default breakpoints', async () => {
    const breakpoints = {};
    const configManager = new ConfigManager();

    configManager.breakpoints = breakpoints;

    expect(configManager.breakpoints).to.be.equal(breakpoints);
  });

  it('should get default pseudoClassVariants', async () => {
    const configManager = new ConfigManager();

    expect(configManager.pseudoClassVariants).to.not.be.undefined;
  });

  it('should be able to override the default pseudoClassVariants', async () => {
    const pseudoClassVariants = {};
    const configManager = new ConfigManager();

    configManager.pseudoClassVariants = pseudoClassVariants;

    expect(configManager.pseudoClassVariants).to.be.equal(pseudoClassVariants);
  });

  it('should get default mediaVariants', async () => {
    const configManager = new ConfigManager();

    expect(configManager.mediaVariants).to.not.be.undefined;
  });

  it('should be able to override the default mediaVariants', async () => {
    const mediaVariants = {};
    const configManager = new ConfigManager();

    configManager.mediaVariants = mediaVariants;

    expect(configManager.mediaVariants).to.be.equal(mediaVariants);
  });
});
