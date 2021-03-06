export default {
  ...[
    ...[
      0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44,
      48, 52, 56, 60, 64, 72, 80, 96,
    ].map(key => [() => key, () => `${key * 0.25}rem`]),

    ...[
      [1, 2],
      [1, 3],
      [2, 3],
      [1, 4],
      [2, 4],
      [3, 4],
      [1, 5],
      [2, 5],
      [3, 5],
      [4, 5],
      [1, 6],
      [2, 6],
      [3, 6],
      [4, 6],
      [5, 6],
    ].map(([numerator, denominator]) => [
      () => `${numerator}/${denominator}`,
      () => `${(numerator / denominator) * 100}%`,
    ]),
  ].reduce(
    (acc, [getKey, getValue]) => ({
      ...acc,
      [`h-${getKey()}`]: { width: getValue() },
    }),
    {
      'h-0': { width: 0 },
      'h-px': { width: '1px' },
      'h-auto': { width: 'auto' },
      'h-full': { width: '100%' },
      'h-screen': { width: '100vh' },
    },
  ),
};
