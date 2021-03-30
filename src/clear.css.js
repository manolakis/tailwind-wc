import { generateVariantsFactory } from './core/generateVariantsFactory.js';

export default generateVariantsFactory('clear', [
  { className: 'clear-left', body: 'clear: left;' },
  { className: 'clear-right', body: 'clear: right;' },
  { className: 'clear-both', body: 'clear: both;' },
  { className: 'clear-none', body: 'clear: none;' },
]);
