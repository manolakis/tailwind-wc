export default {
  ...['start', 'end', 'center', 'stretch'].reduce(
    (acc, key) => ({
      ...acc,
      [`place-items-${key}`]: { 'place-items': key },
    }),
    {},
  ),
};
