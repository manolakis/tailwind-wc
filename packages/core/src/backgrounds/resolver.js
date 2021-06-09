import { generateVariantsFactory } from '../core/generateVariantsFactory.js';

import backgroundAttachmentCSS from './background-attachment.css.js';
import backgroundClipCss from './background-clip.css.js';
import backgroundColorCSS from './background-color.css.js';
import backgroundImageCSS from './background-image.css.js';
import backgroundOpacityCSS from './background-opacity.css.js';
import backgroundPositionCSS from './background-position.css.js';
import backgroundRepeatCSS from './background-repeat.css.js';
import backgroundSizeCSS from './background-size.css.js';
import gradientColorStopsCSS from './gradient-color-stops.css.js';

export default {
  'background-attachment': () =>
    generateVariantsFactory('background-attachment', backgroundAttachmentCSS),
  'background-clip': () => generateVariantsFactory('background-clip', backgroundClipCss),
  'background-color': () => generateVariantsFactory('background-color', backgroundColorCSS),
  'background-image': () => generateVariantsFactory('background-image', backgroundImageCSS),
  'background-opacity': () => generateVariantsFactory('background-opacity', backgroundOpacityCSS),
  'background-position': () =>
    generateVariantsFactory('background-position', backgroundPositionCSS),
  'background-repeat': () => generateVariantsFactory('background-repeat', backgroundRepeatCSS),
  'background-size': () => generateVariantsFactory('background-size', backgroundSizeCSS),
  'gradient-color-stops': () =>
    generateVariantsFactory('gradient-color-stops', gradientColorStopsCSS),
};
