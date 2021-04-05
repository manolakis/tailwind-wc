import { generateVariantsFactory } from './core/generateVariantsFactory.js';

export default generateVariantsFactory('position', [
  { className: 'static', body: 'position: static;' },
  { className: 'fixed', body: 'position: fixed;' },
  { className: 'absolute', body: 'position: absolute;' },
  { className: 'relative', body: 'position: relative;' },
  { className: 'sticky', body: 'position: sticky;' },
]);
