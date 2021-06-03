export default {
  ...['left', 'right', 'both', 'none'].reduce(
    (acc, key) => ({
      ...acc,
      [`clear-${key}`]: { clear: key },
    }),
    {},
  ),
};
