import { generateVariantsFactory } from '../core/generateVariantsFactory.js';
import paddingCSS from './padding.css.js';
import marginCSS from './margin.css.js';
import spaceCSS from './space.css.js';

export default {
  padding: () => generateVariantsFactory('padding', paddingCSS),
  margin: () => generateVariantsFactory('margin', marginCSS),
  space: () => generateVariantsFactory('space', spaceCSS),
};
