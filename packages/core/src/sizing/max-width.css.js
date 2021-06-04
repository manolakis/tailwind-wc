import { config } from '../config.js';

export default {
  ...[
    [0, 0],
    ['none', 'none'],
    ['xs', '20rem'],
    ['sm', '24rem'],
    ['md', '28rem'],
    ['lg', '32rem'],
    ['xl', '36rem'],
    ['2xl', '42rem'],
    ['3xl', '48rem'],
    ['4xl', '56rem'],
    ['5xl', '64rem'],
    ['6xl', '72rem'],
    ['7xl', '80rem'],
    ['full', '100%'],
    ['min', 'min-content'],
    ['max', 'max-content'],
    ['prose', '65ch'],
    ...Object.entries(config.breakpoints).map(([key, value]) => [`screen-${key}`, `${value}px`]),
  ].reduce(
    (acc, [key, value]) => ({
      ...acc,
      [`max-w-${key}`]: { 'max-width': value },
    }),
    {},
  ),
};
