export default {
  ...[0, 10, 20, 30, 40, 50, 'auto'].reduce(
    (acc, key) => ({
      ...acc,
      [`z-${key}`]: { 'z-index': key },
    }),
    {},
  ),
};
