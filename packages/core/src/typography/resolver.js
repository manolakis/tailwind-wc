import { generateVariantsFactory } from '../core/generateVariantsFactory.js';

import fontFamilyCSS from './font-family.css.js';
import fontSizeCSS from './font-size.css.js';
import fontSmoothingCSS from './font-smoothing.css.js';
import fontStyleCSS from './font-style.css.js';
import fontVariantNumericCSS from './font-variant-numeric.css.js';
import fontWeightCSS from './font-weight.css.js';
import letterSpacingCSS from './letter-spacing.css.js';
import lineHeightCSS from './line-height.css.js';
import listStyleTypeCSS from './list-style-type.css.js';
import listStylePositionCSS from './list-style-position.css.js';
import placeholderColorsCSS from './placeholder-color.css.js';
import placeholderOpacityCSS from './placeholder-opacity.css.js';
import textAlignCSS from './text-align.css.js';
import textColorCSS from './text-color.css.js';
import textDecorationCSS from './text-decoration.css.js';
import textOpacityCSS from './text-opacity.css.js';
import textOverflowCSS from './text-overflow.css.js';
import textTransformCSS from './text-transform.css.js';
import verticalAlignCSS from './vertical-align.css.js';
import whitespaceCSS from './whitespace.css.js';
import wordBreakCSS from './word-break.css.js';

export default {
  'font-family': () => generateVariantsFactory('font-family', fontFamilyCSS),
  'font-size': () => generateVariantsFactory('font-size', fontSizeCSS),
  'font-smoothing': () => generateVariantsFactory('font-smoothing', fontSmoothingCSS),
  'font-style': () => generateVariantsFactory('font-style', fontStyleCSS),
  'font-variant-numeric': () =>
    generateVariantsFactory('font-variant-numeric', fontVariantNumericCSS),
  'font-weight': () => generateVariantsFactory('font-weight', fontWeightCSS),
  'letter-spacing': () => generateVariantsFactory('letter-spacing', letterSpacingCSS),
  'line-height': () => generateVariantsFactory('line-height', lineHeightCSS),
  'list-style-type': () => generateVariantsFactory('list-style-type', listStyleTypeCSS),
  'list-style-position': () => generateVariantsFactory('list-style-position', listStylePositionCSS),
  'placeholder-colors': () => generateVariantsFactory('placeholder-colors', placeholderColorsCSS),
  'placeholder-opacity': () =>
    generateVariantsFactory('placeholder-opacity', placeholderOpacityCSS),
  'text-align': () => generateVariantsFactory('text-align', textAlignCSS),
  'text-color': () => generateVariantsFactory('text-color', textColorCSS),
  'text-decoration': () => generateVariantsFactory('text-decoration', textDecorationCSS),
  'text-opacity': () => generateVariantsFactory('text-opacity', textOpacityCSS),
  'text-overflow': () => generateVariantsFactory('text-overflow', textOverflowCSS),
  'text-transform': () => generateVariantsFactory('text-transform', textTransformCSS),
  'vertical-align': () => generateVariantsFactory('vertical-align', verticalAlignCSS),
  whitespace: () => generateVariantsFactory('whitespace', whitespaceCSS),
  'word-break': () => generateVariantsFactory('word-break', wordBreakCSS),
};
