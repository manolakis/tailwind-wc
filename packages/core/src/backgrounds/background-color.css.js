import { config } from '../config.js';
import { hexToRgba } from '../core/utils.js';

const { colors } = config;

export default {
  ...[
    ...Object.keys(colors).flatMap(color =>
      Object.keys(colors[color]).map(key => [color, key, colors[color][key]]),
    ),
  ].reduce(
    (acc, [color, key, hexColor]) => ({
      ...acc,
      [`bg-${color}-${key}`]: {
        '--tw-bg-opacity': 1,
        'background-color': hexToRgba(hexColor, 'var(--tw-bg-opacity)'),
      },
    }),
    {
      'bg-transparent': { 'background-color': 'transparent' },
      'bg-current': { 'background-color': 'currentColor' },
      'bg-black': {
        '--tw-bg-opacity': 1,
        'background-color': 'rgba(0, 0, 0, var(--tw-bg-opacity))',
      },
      'text-white': {
        '--tw-bg-opacity': 1,
        'background-color': 'rgba(255, 255, 255, var(--tw-bg-opacity))',
      },
    },
  ),
};
