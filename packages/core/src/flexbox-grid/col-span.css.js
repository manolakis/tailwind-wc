export default {
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'full'].reduce(
    (acc, key) => ({
      ...acc,
      [`col-span-${key}`]: {
        'grid-template-columns': key !== 'full' ? `span ${key} / span ${key}` : '1 / -1',
      },
    }),
    {},
  ),
};
