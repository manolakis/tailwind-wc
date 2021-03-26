import { generateVariantsFactory } from './core/generateVariantsFactory.js';

export default generateVariantsFactory('float', [
  { className: 'float-left', body: 'float: left;' },
  { className: 'float-right', body: 'float: right;' },
  { className: 'float-none', body: 'float: none;' },
]);
