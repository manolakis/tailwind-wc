export default {
  ...['none', 'disc', 'decimal'].reduce(
    (acc, key) => ({
      ...acc,
      [`list-${key}`]: { 'list-style-type': key },
    }),
    {},
  ),
};
