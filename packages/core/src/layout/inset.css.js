export default {
  ...[
    [0, true, key => key, () => '0px'],

    ['px', true, key => key, (key, sign = 1) => `${sign}px`],

    ...[
      0.5,
      1,
      1.5,
      2,
      2.5,
      3,
      3.5,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      14,
      16,
      20,
      24,
      28,
      32,
      36,
      40,
      44,
      48,
      52,
      56,
      60,
      64,
      72,
      80,
      96,
    ].map(key => [key, true, k => k, (k, sign = 1) => `${k * sign * 0.25}rem`]),

    ['auto', false, key => key, () => 'auto'],

    ...[
      [1, 2],
      [1, 3],
      [2, 3],
      [1, 4],
      [2, 4],
      [3, 4],
    ].map(key => [
      key,
      true,
      ([numerator, denominator]) => `${numerator}/${denominator}`,
      ([numerator, denominator], sign = 1) => `${(numerator / denominator) * sign * 100}%`,
    ]),

    ['full', true, key => key, (key, sign = 1) => `${sign}00%`],
  ].reduce(
    (acc, [key, negative, getKey, getValue]) => ({
      ...acc,

      [`inset-${getKey(key)}`]: {
        top: getValue(key),
        right: getValue(key),
        bottom: getValue(key),
        left: getValue(key),
      },
      [`inset-y-${getKey(key)}`]: { top: getValue(key), bottom: getValue(key) },
      [`inset-x-${getKey(key)}`]: { right: getValue(key), left: getValue(key) },
      [`top-${getKey(key)}`]: { top: getValue(key) },
      [`right-${getKey(key)}`]: { right: getValue(key) },
      [`bottom-${getKey(key)}`]: { bottom: getValue(key) },
      [`left-${getKey(key)}`]: { left: getValue(key) },

      ...(negative
        ? {
            [`-inset-${getKey(key)}`]: {
              top: getValue(key, -1),
              right: getValue(key, -1),
              bottom: getValue(key, -1),
              left: getValue(key, -1),
            },
            [`-inset-y-${getKey(key)}`]: { top: getValue(key, -1), bottom: getValue(key, -1) },
            [`-inset-x-${getKey(key)}`]: { right: getValue(key, -1), left: getValue(key, -1) },
            [`-top-${getKey(key)}`]: { top: getValue(key, -1) },
            [`-right-${getKey(key)}`]: { right: getValue(key, -1) },
            [`-bottom-${getKey(key)}`]: { bottom: getValue(key, -1) },
            [`-left-${getKey(key)}`]: { left: getValue(key, -1) },
          }
        : {}),
    }),
    {},
  ),
};
