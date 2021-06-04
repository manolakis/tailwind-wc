export default {
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 'auto'].reduce(
    (acc, key) => ({
      ...acc,
      [`col-end-${key}`]: { 'grid-column-end': key },
    }),
    {},
  ),
};
