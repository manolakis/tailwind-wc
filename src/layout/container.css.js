import { CSSRule } from '../core/CSSRule.js';
import { CSSMedia } from '../core/CSSMedia.js';
import { defaultMapper } from '../core/generateVariantsFactory.js';
import { config } from '../config.js';

const { breakpoints, mediaVariants } = config;
const baseRule = new CSSRule('container', 'width: 100%;');

const mediaRules = Object.entries(breakpoints).map(
  ([key, breakpoint]) =>
    new CSSMedia(mediaVariants[key], [
      new CSSRule(`${key}\\:container`, `max-width: ${breakpoint}px;`),
    ]),
);

export default ({ mapper = defaultMapper, responsive }) =>
  [baseRule, ...((responsive && mediaRules) || [])].map(rule => mapper(rule));
