export default {
  ...['start', 'end', 'center', 'stretch'].reduce(
    (acc, key) => ({
      ...acc,
      [`justify-items-${key}`]: { 'justify-items': key },
    }),
    {},
  ),
};
