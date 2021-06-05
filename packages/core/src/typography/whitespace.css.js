export default {
  ...['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap'].reduce(
    (acc, key) => ({
      ...acc,
      [`whitespace-${key}`]: { 'white-space': key },
    }),
    {},
  ),
};
