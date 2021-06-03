import { generateVariantsFactory } from '../core/generateVariantsFactory.js';
import boxDecorationBreakCSS from './box-decoration-break.css.js';
import boxSizingCSS from './box-sizing.css.js';
import clearCSS from './clear.css.js';
import containerCSS from './container.css.js';
import displayCSS from './display.css.js';
import floatCSS from './float.css.js';
import insetCSS from './inset.css.js';
import isolationCSS from './isolation.css.js';
import objectFitCSS from './object-fit.css.js';
import objectPositionCSS from './object-position.css.js';
import overflowCSS from './overflow.css.js';
import overscrollBehaviorCSS from './overscroll-behavior.css.js';
import positionCSS from './position.css.js';
import visibilityCSS from './visibility.css.js';
import zIndexCSS from './z-index.css.js';

export default {
  'box-decoration-break': () =>
    generateVariantsFactory('box-decoration-break', boxDecorationBreakCSS),
  'box-sizing': () => generateVariantsFactory('box-sizing', boxSizingCSS),
  clear: () => generateVariantsFactory('clear', clearCSS),
  container: () => containerCSS, // container has special generation
  display: () => generateVariantsFactory('display', displayCSS),
  float: () => generateVariantsFactory('float', floatCSS),
  inset: () => generateVariantsFactory('inset', insetCSS),
  isolation: () => generateVariantsFactory('isolation', isolationCSS),
  'object-fit': () => generateVariantsFactory('object-fit', objectFitCSS),
  'object-position': () => generateVariantsFactory('object-position', objectPositionCSS),
  overflow: () => generateVariantsFactory('overflow', overflowCSS),
  'overscroll-behavior': () =>
    generateVariantsFactory('overscroll-behavior', overscrollBehaviorCSS),
  position: () => generateVariantsFactory('position', positionCSS),
  visibility: () => generateVariantsFactory('visibility', visibilityCSS),
  'z-index': () => generateVariantsFactory('z-index', zIndexCSS),
};
