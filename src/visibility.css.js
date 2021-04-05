import { generateVariantsFactory } from './core/generateVariantsFactory.js';

export default generateVariantsFactory('visibility', [
  { className: 'visible', body: 'visibility: visible;' },
  { className: 'invisible', body: 'visibility: hidden;' },
]);
