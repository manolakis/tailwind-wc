export default {
  ...[0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100].reduce(
    (acc, key) => ({
      ...acc,
      [`placeholder-opacity-${key}`]: { '--tw-placeholder-opacity': key / 100 },
    }),
    {},
  ),
};
