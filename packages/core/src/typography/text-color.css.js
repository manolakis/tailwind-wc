import { config } from '../config.js';

export default {
  ...[
    ...Object.keys(config.colors).flatMap(color =>
      Object.keys(config.colors[color]).map(key => [color, key, config.colors[color][key]]),
    ),
  ].reduce(
    (acc, [color, key, getColor]) => ({
      ...acc,
      [`text-${color}-${key}`]: {
        '--tw-text-opacity': 1,
        color: getColor('--tw-text-opacity'),
      },
    }),
    {
      'text-transparent': { color: 'transparent' },
      'text-current': { color: 'currentColor' },
      'text-black': {
        '--tw-text-opacity': 1,
        color: 'rgba(0, 0, 0, var(--tw-text-opacity))',
      },
      'text-white': {
        '--tw-text-opacity': 1,
        color: 'rgba(255, 255, 255, var(--tw-text-opacity))',
      },
    },
  ),
};
