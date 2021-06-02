import { generateVariantsFactory } from './core/generateVariantsFactory.js';

import flexDirection from './flexbox-grid/flex-direction.js';
import flexGrow from './flexbox-grid/flex-grow.js';
import flexShrink from './flexbox-grid/flex-shrink.js';
import flexWrap from './flexbox-grid/flex-wrap.js';
import flex from './flexbox-grid/flex.js';
import order from './flexbox-grid/order.js';
import gridCols from './flexbox-grid/grid-cols.js';

export default {
  'flex-direction': () => generateVariantsFactory('flex-direction', flexDirection),
  'flex-grow': () => generateVariantsFactory('flex-grow', flexGrow),
  'flex-shrink': () => generateVariantsFactory('flex-shrink', flexShrink),
  'flex-wrap': () => generateVariantsFactory('flex-wrap', flexWrap),
  flex: () => generateVariantsFactory('flex', flex),
  order: () => generateVariantsFactory('order', order),
  'grid-cols': () => generateVariantsFactory('grid-cols', gridCols),
};
