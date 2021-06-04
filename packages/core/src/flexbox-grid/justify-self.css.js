export default {
  ...['auto', 'start', 'end', 'center', 'stretch'].reduce(
    (acc, key) => ({
      ...acc,
      [`justify-self-${key}`]: { 'justify-self': key },
    }),
    {},
  ),
};
