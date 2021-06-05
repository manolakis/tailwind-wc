export default {
  ...[0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100].reduce(
    (acc, key) => ({
      ...acc,
      [`text-opacity-${key}`]: { '--tw-text-opacity': key / 100 },
    }),
    {},
  ),
};
