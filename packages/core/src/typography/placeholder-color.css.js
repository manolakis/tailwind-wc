import { config } from '../config.js';
import { hexToRgba } from '../core/utils.js';

export default {
  ...[
    ...Object.keys(config.colors).flatMap(color =>
      Object.keys(config.colors[color]).map(key => [color, key, config.colors[color][key]]),
    ),
  ].reduce(
    (acc, [color, key, hexColor]) => ({
      ...acc,
      [`placeholder-${color}-${key}::placeholder`]: {
        '--tw-placeholder-opacity': 1,
        color: hexToRgba(hexColor, 'var(--tw-placeholder-opacity)'),
      },
    }),
    {
      'placeholder-transparent::placeholder': { color: 'transparent' },
      'placeholder-current::placeholder': { color: 'currentColor' },
      'placeholder-black::placeholder': {
        '--tw-placeholder-opacity': 1,
        color: 'rgba(0, 0, 0, var(--tw-placeholder-opacity))',
      },
      'placeholder-white::placeholder': {
        '--tw-placeholder-opacity': 1,
        color: 'rgba(255, 255, 255, var(--tw-placeholder-opacity))',
      },
    },
  ),
};
