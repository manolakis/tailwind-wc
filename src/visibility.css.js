import { generateVariantsFactory } from './core/generateVariantsFactory.js';

export default generateVariantsFactory('visibility', {
  visible: { visibility: 'visible' },
  invisible: { visibility: 'hidden' },
});
