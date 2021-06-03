export default {
  ...['left', 'right', 'none'].reduce(
    (acc, key) => ({
      ...acc,
      [`float-${key}`]: { float: key },
    }),
    {},
  ),
};
