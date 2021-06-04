export default {
  ...['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom'].reduce(
    (acc, key) => ({
      ...acc,
      [`align-${key}`]: { 'vertical-align': key },
    }),
    {},
  ),
};
