import { stub as SinonStub } from 'sinon';

export const KEY = 'layout-resolver';
export const stub = new SinonStub();

export default {
  [KEY]: stub,
};
