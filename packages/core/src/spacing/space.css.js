export default {
  ...[
    [0, () => 0],
    ['px', sign => `${sign}1rem`],
    ...[
      0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44,
      48, 52, 56, 60, 64, 72, 80, 96,
    ].map(key => [key, sign => `${sign}${key * 0.25}rem`]),
  ].reduce(
    (acc, [key, getValue]) => ({
      ...acc,
      ...['', '-'].reduce(
        (acc2, sign) => ({
          [`${sign}space-y-${key} > * + *`]: {
            '--tw-space-y-reverse': 0,
            'margin-top': `calc(${getValue(sign)} * calc(1 - var(--tw-space-y-reverse)))`,
            'margin-bottom': `calc(${getValue(sign)} * var(--tw-space-y-reverse))`,
          },
          [`${sign}space-x-${key} > * + *`]: {
            '--tw-space-x-reverse': 0,
            'margin-right': `calc(${getValue(sign)} * var(--tw-space-x-reverse))`,
            'margin-left': `calc(${getValue(sign)} * calc(1 - var(--tw-space-x-reverse)))`,
          },
        }),
        {},
      ),
    }),
    {
      'space-y-reverse > * + *': { '--tw-space-y-reverse': 1 },
      'space-x-reverse > * + *': { '--tw-space-x-reverse': 1 },
    },
  ),
};
