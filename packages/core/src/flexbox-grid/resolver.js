import { generateVariantsFactory } from '../core/generateVariantsFactory.js';

import alignContentCSS from './align-content.css.js';
import alignItemsCSS from './align-items.css.js';
import alignSelfCSS from './align-self.css.js';
import colEndCSS from './col-end.css.js';
import colSpanCSS from './col-span.css.js';
import colStartCSS from './col-start.css.js';
import flexDirectionCSS from './flex-direction.css.js';
import flexGrowCSS from './flex-grow.css.js';
import flexShrinkCSS from './flex-shrink.css.js';
import flexWrapCSS from './flex-wrap.css.js';
import flexCSS from './flex.css.js';
import gapCSS from './gap.css.js';
import gridAutoColsCSS from './grid-auto-cols.css.js';
import gridAutoRowsCSS from './grid-auto-rows.css.js';
import gridColsCSS from './grid-cols.css.js';
import gridFlowCSS from './grid-flow.css.js';
import gridRowsCSS from './grid-rows.css.js';
import justifyContentCSS from './justify-content.css.js';
import justifyItemsCSS from './justify-items.css.js';
import justifySelfCSS from './justify-self.css.js';
import orderCSS from './order.css.js';
import placeContentCSS from './place-content.css.js';
import placeItemsCSS from './place-items.css.js';
import placeSelfCSS from './place-self.css.js';
import rowAutoCSS from './row-auto.css.js';
import rowEndCSS from './row-end.css.js';
import rowSpanCSS from './row-span.css.js';
import rowStartCSS from './row-start.css.js';

export default {
  'align-content': () => generateVariantsFactory('align-content', alignContentCSS),
  'align-items': () => generateVariantsFactory('align-items', alignItemsCSS),
  'align-self': () => generateVariantsFactory('align-self', alignSelfCSS),
  'col-end': () => generateVariantsFactory('col-end', colEndCSS),
  'col-span': () => generateVariantsFactory('col-span', colSpanCSS),
  'col-start': () => generateVariantsFactory('col-start', colStartCSS),
  'flex-direction': () => generateVariantsFactory('flex-direction', flexDirectionCSS),
  'flex-grow': () => generateVariantsFactory('flex-grow', flexGrowCSS),
  'flex-shrink': () => generateVariantsFactory('flex-shrink', flexShrinkCSS),
  'flex-wrap': () => generateVariantsFactory('flex-wrap', flexWrapCSS),
  flex: () => generateVariantsFactory('flex', flexCSS),
  gap: () => generateVariantsFactory('gap', gapCSS),
  'grid-auto-cols': () => generateVariantsFactory('grid-auto-cols', gridAutoColsCSS),
  'grid-auto-rows': () => generateVariantsFactory('grid-auto-rows', gridAutoRowsCSS),
  'grid-cols': () => generateVariantsFactory('grid-cols', gridColsCSS),
  'grid-flow': () => generateVariantsFactory('grid-flow', gridFlowCSS),
  'grid-rows': () => generateVariantsFactory('grid-rows', gridRowsCSS),
  'justify-content': () => generateVariantsFactory('justify-content', justifyContentCSS),
  'justify-items': () => generateVariantsFactory('justify-items', justifyItemsCSS),
  'justify-self': () => generateVariantsFactory('justify-content', justifySelfCSS),
  order: () => generateVariantsFactory('order', orderCSS),
  'place-content': () => generateVariantsFactory('place-content', placeContentCSS),
  'place-items': () => generateVariantsFactory('place-items', placeItemsCSS),
  'place-self': () => generateVariantsFactory('place-self', placeSelfCSS),
  'row-auto': () => generateVariantsFactory('row-auto', rowAutoCSS),
  'row-end': () => generateVariantsFactory('row-end', rowEndCSS),
  'row-span': () => generateVariantsFactory('row-span', rowSpanCSS),
  'row-start': () => generateVariantsFactory('row-start', rowStartCSS),
};
