import { generateVariantsFactory } from '../core/generateVariantsFactory.js';
import heightCSS from './height.css.js';
import minHeightCSS from './min-height.css.js';
import maxHeightCSS from './max-height.css.js';
import widthCSS from './width.css.js';
import minWidthCSS from './min-width.css.js';
import maxWidthCSS from './max-width.css.js';

export default {
  height: () => generateVariantsFactory('height', heightCSS),
  'min-height': () => generateVariantsFactory('min-height', minHeightCSS),
  'max-height': () => generateVariantsFactory('max-height', maxHeightCSS),

  width: () => generateVariantsFactory('width', widthCSS),
  'min-width': () => generateVariantsFactory('min-width', minWidthCSS),
  'max-width': () => generateVariantsFactory('max-width', maxWidthCSS),
};
