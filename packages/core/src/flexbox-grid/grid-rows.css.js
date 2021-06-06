export default {
  ...[1, 2, 3, 4, 5, 6, 'none'].reduce(
    (acc, key) => ({
      ...acc,
      [`grid-rows-${key}`]: {
        'grid-template-rows': key !== 'none' ? `epeat(${key}, minmax(0, 1fr))` : key,
      },
    }),
    {},
  ),
};
