export default {
  ...['auto', 'start', 'end', 'center', 'stretch'].reduce(
    (acc, key) => ({
      ...acc,
      [`place-self-${key}`]: { 'place-self': key },
    }),
    {},
  ),
};
