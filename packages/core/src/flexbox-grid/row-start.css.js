export default {
  ...[1, 2, 3, 4, 5, 6, 7, 'auto'].reduce(
    (acc, key) => ({
      ...acc,
      [`row-start-${key}`]: { 'grid-row-start': key },
    }),
    {},
  ),
};
