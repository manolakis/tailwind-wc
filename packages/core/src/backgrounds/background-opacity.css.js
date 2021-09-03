export default {
  ...[0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100].reduce(
    (acc, key) => ({
      ...acc,
      [`bg-opacity-${key}`]: { '--tw-bg-opacity:': key / 100 },
    }),
    {},
  ),
};
