import { generateVariantsFactory } from './core/generateVariantsFactory.js';

export default generateVariantsFactory('overscroll', [
  { className: 'overscroll-auto', body: 'overscroll-behavior: auto;' },
  { className: 'overscroll-contain', body: 'overscroll-behavior: contain;' },
  { className: 'overscroll-none', body: 'overscroll-behavior: none;' },
  { className: 'overscroll-y-auto', body: 'overscroll-behavior-y: auto;' },
  { className: 'overscroll-y-contain', body: 'overscroll-behavior-y: contain;' },
  { className: 'overscroll-y-none', body: 'overscroll-behavior-y: none;' },
  { className: 'overscroll-x-auto', body: 'overscroll-behavior-x: auto;' },
  { className: 'overscroll-x-contain', body: 'overscroll-behavior-x: contain;' },
  { className: 'overscroll-x-none', body: 'overscroll-behavior-x: none;' },
]);
