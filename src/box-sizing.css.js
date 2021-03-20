import { generateVariantsFactory } from './core/generateVariantsFactory.js';

export default generateVariantsFactory('box-sizing', [
  { className: 'box-border', body: 'box-sizing: border-box;' },
  { className: 'box-content', body: 'box-sizing: content-box;' },
]);
