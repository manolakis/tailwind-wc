export default {
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none'].reduce(
    (acc, key) => ({
      ...acc,
      [`grid-cols-${key}`]: { 'grid-template-columns': (key!=='none') ? `repeat(${key}, minmax(0, 1fr))` : key },
    }),
    {},
  ),
};
