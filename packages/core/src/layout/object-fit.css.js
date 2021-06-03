export default {
  ...['contain', 'cover', 'fill', 'none', 'scale-down'].reduce(
    (acc, key) => ({
      ...acc,
      [`object-${key}`]: { 'object-fit': key },
    }),
    {},
  ),
};
