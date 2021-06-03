export default {
  ...[
    'bottom',
    'center',
    'left',
    'left-bottom',
    'left-top',
    'right',
    'right-bottom',
    'right-top',
    'top',
  ].reduce(
    (acc, key) => ({
      ...acc,
      [`object-${key}`]: { 'object-position': key },
    }),
    {},
  ),
};
