import { generateVariantsFactory } from '../core/generateVariantsFactory.js';

export default generateVariantsFactory('float', {
  'float-left': { float: 'left' },
  'float-right': { float: 'right' },
  'float-none': { float: 'none' },
});
