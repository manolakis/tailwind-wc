import { hexToRgba } from '../core/utils.js';
import { config } from '../config.js';

const { colors } = config;

export default {
  ...[
    ...Object.keys(colors).flatMap(color =>
      Object.keys(colors[color]).map(key => [color, key, colors[color][key]]),
    ),
  ].reduce(
    (acc, [color, key, hexColor]) => ({
      ...acc,
      [`from-${color}-${key}`]: {
        '--tw-gradient-from': hexColor,
        '--tw-gradient-stops': `var(--tw-gradient-from), var(--tw-gradient-to, ${hexToRgba(
          hexColor,
          0,
        )})`,
      },
      [`via-${color}-${key}`]: {
        '--tw-gradient-stops': `var(--tw-gradient-from), ${hexColor}, var(--tw-gradient-to, ${hexToRgba(
          hexColor,
          0,
        )}`,
      },
      [`to-${color}-${key}`]: { '--tw-gradient-to': hexColor },
    }),
    {
      'from-transparent': {
        '--tw-gradient-from': 'transparent',
        '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0))',
      },
      'from-current': {
        '--tw-gradient-from': 'currentColor',
        '--tw-gradient-stops':
          'var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0))',
      },
      'from-black': {
        '--tw-gradient-from': '#000',
        '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0))',
      },
      'from-white': {
        '--tw-gradient-from': '#fff',
        '--tw-gradient-stops':
          'var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0))',
      },
      'via-transparent': {
        '--tw-gradient-stops':
          'var(--tw-gradient-from), transparent, var(--tw-gradient-to, rgba(0, 0, 0, 0))',
      },
      'via-current': {
        '--tw-gradient-stops':
          'var(--tw-gradient-from), currentColor, var(--tw-gradient-to, rgba(255, 255, 255, 0))',
      },
      'via-black': {
        '--tw-gradient-stops':
          'var(--tw-gradient-from), #000, var(--tw-gradient-to, rgba(0, 0, 0, 0))',
      },
      'via-white': {
        '--tw-gradient-stops':
          'var(--tw-gradient-from), #fff, var(--tw-gradient-to, rgba(255, 255, 255, 0))',
      },
      'to-transparent': { '--tw-gradient-to': 'transparent' },
      'to-current': { '--tw-gradient-to': 'currentColor' },
      'to-black': { '--tw-gradient-to': '#000' },
      'to-white': { '--tw-gradient-to': '#fff' },
    },
  ),
};
