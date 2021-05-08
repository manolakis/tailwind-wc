import { stub as SinonStub } from 'sinon';
import { RulesManager } from '../../src/RulesManager.js';

export const KEY = 'test';
export const stub = new SinonStub();
export const rules = new RulesManager();

rules.add({
  [KEY]: () => stub,
});

export const setRules = () => {};
