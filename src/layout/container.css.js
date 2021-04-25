import { CSSRule } from '../core/CSSRule.js';
import { CSSMedia } from '../core/CSSMedia.js';
import { defaultMapper } from '../core/generateVariantsFactory.js';
import { breakpoints } from '../core/breakpoints.js';
import { mediaVariants } from '../core/mediaVariants.js';

const baseRule = new CSSRule('container', 'width: 100%;');

const mediaRules = Object.entries(breakpoints).map(
  ([key, breakpoint]) =>
    new CSSMedia(mediaVariants[key](), [
      new CSSRule(`${key}\\:container`, `max-width: ${breakpoint}px;`),
    ]),
);

export default ({ mapper = defaultMapper, responsive }) =>
  [baseRule, ...((responsive && mediaRules) || [])].map(rule => mapper(rule));
