export default {
  ...['static', 'fixed', 'absolute', 'relative', 'sticky'].reduce(
    (acc, key) => ({
      ...acc,
      [key]: { position: key },
    }),
    {},
  ),
};
