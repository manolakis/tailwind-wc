import { generateVariantsFactory } from './core/generateVariantsFactory.js';

export default generateVariantsFactory('z-index', [
  { className: 'z-0', body: 'z-index: 0;' },
  { className: 'z-10', body: 'z-index: 10;' },
  { className: 'z-20', body: 'z-index: 20;' },
  { className: 'z-30', body: 'z-index: 30;' },
  { className: 'z-40', body: 'z-index: 40;' },
  { className: 'z-50', body: 'z-index: 50;' },
  { className: 'z-auto', body: 'z-index: auto;' },
]);
