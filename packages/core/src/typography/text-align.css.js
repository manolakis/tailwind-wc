export default {
  ...['left', 'center', 'right', 'justify'].reduce(
    (acc, key) => ({
      ...acc,
      [`text-${key}`]: { 'text-align': key },
    }),
    {},
  ),
};
