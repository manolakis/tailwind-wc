import { generateVariantsFactory } from '../core/generateVariantsFactory.js';

export default generateVariantsFactory('position', {
  static: { position: 'static' },
  fixed: { position: 'fixed' },
  absolute: { position: 'absolute' },
  relative: { position: 'relative' },
  sticky: { position: 'sticky' },
});
