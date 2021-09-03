export default {
  ...['auto', 'cover', 'cotain'].reduce(
    (acc, key) => ({
      ...acc,
      [`bg-${key}`]: { 'background-size:': key },
    }),
    {},
  ),
};
