import { breakpoints } from './breakpoints.js';

/**
 * Map of css media variants.
 *
 * @type {Record<String, Function<string, string>>}
 */
export const mediaVariants = {
  'motion-reduce': () => 'prefers-reduced-motion: reduce',
  'motion-safe': () => 'prefers-reduced-motion: no-preference',
  ...Object.fromEntries(
    Object.keys(breakpoints).map(breakpoint => [
      breakpoint,
      () => `min-width: ${breakpoints[breakpoint]}px`,
    ]),
  ),
};
