export default {
  ...['auto', 'hidden', 'visible', 'scroll'].reduce(
    (acc, key) => ({
      ...acc,
      [`overflow-${key}`]: { overflow: key },
      [`overflow-x-${key}`]: { 'overflow-x': key },
      [`overflow-y-${key}`]: { 'overflow-y': key },
    }),
    {},
  ),
};
