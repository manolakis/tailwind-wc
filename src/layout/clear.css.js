import { generateVariantsFactory } from '../core/generateVariantsFactory.js';

export default generateVariantsFactory('clear', {
  'clear-left': { clear: 'left' },
  'clear-right': { clear: 'right' },
  'clear-both': { clear: 'both' },
  'clear-none': { clear: 'none' },
});
