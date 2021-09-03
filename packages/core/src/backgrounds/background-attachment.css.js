export default {
  ...['fixed', 'local', 'scroll'].reduce(
    (acc, key) => ({
      ...acc,
      [`bg-${key}`]: { 'background-attachment': key },
    }),
    {},
  ),
};
