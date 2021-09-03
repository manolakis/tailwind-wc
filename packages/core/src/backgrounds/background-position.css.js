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
      [`bg-${key}`]: { 'background-position:': key.replace('-', ' ') },
    }),
    {},
  ),
};
