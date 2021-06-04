export default {
  ...[1, 2, 3, 4, 5, 6, 'full'].reduce(
    (acc, key) => ({
      ...acc,
      [`row-span-${key}`]: { 'grid-row': (key!=='full') ? `span ${key} / span ${key}` : '1 / -1' },
    }),
    {},
  ),
};
