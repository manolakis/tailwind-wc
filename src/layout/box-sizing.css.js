import { generateVariantsFactory } from '../core/generateVariantsFactory.js';

export default generateVariantsFactory('box-sizing', {
  'box-border': { 'box-sizing': 'border-box' },
  'box-content': { 'box-sizing': 'content-box' },
});
