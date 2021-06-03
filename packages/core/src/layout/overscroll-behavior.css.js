export default {
  ...['auto', 'contain', 'none'].reduce(
    (acc, key) => ({
      ...acc,
      [`overscroll-${key}`]: { 'overscroll-behavior': key },
      [`overscroll-x-${key}`]: { 'overscroll-behavior-x': key },
      [`overscroll-y-${key}`]: { 'overscroll-behavior-y': key },
    }),
    {},
  ),
};
