export default {
  ...[
    [0, () => 0],
    ['px', () => '1px'],
    ...[
      0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44,
      48, 52, 56, 60, 64, 72, 80, 96,
    ].map(key => [key, () => `${key * 0.25}rem`]),
  ].reduce(
    (acc, [key, getValue]) => ({
      ...acc,
      [`gap-${key}`]: { gap: getValue() },
      [`gap-x-${key}`]: { 'column-gap': getValue() },
      [`gap-y-${key}`]: { 'row-gap': getValue() },
    }),
    {},
  ),
};
