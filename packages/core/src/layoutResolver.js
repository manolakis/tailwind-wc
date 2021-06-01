import { generateVariantsFactory } from './core/generateVariantsFactory.js';
import boxSizingCSS from './layout/box-sizing.css.js';
import clearCSS from './layout/clear.css.js';
import container from './layout/container.css.js';
import floatCSS from './layout/float.css.js';
import overscrollCSS from './layout/overscroll.css.js';
import positionCSS from './layout/position.css.js';
import visibilityCSS from './layout/visibility.css.js';

export default {
  'box-sizing': () => generateVariantsFactory('box-sizing', boxSizingCSS),
  clear: () => generateVariantsFactory('clear', clearCSS),
  container: () => container, // container has special generation
  float: () => generateVariantsFactory('float', floatCSS),
  overscroll: () => generateVariantsFactory('overscroll', overscrollCSS),
  position: () => generateVariantsFactory('position', positionCSS),
  visibility: () => generateVariantsFactory('visibility', visibilityCSS),
};
