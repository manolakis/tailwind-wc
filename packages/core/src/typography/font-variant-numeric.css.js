export default {
  ...[
    ['normal-nums', 'normal'],
    ['ordinal'],
    ['slashed-zero'],
    ['lining-nums'],
    ['oldstyle-nums'],
    ['proportional-nums'],
    ['tabular-nums'],
    ['diagonal-fractions'],
    ['stacked-fractions'],
  ].reduce(
    (acc, [key, value = key]) => ({
      ...acc,
      [key]: { 'font-variant-numeric': value },
    }),
    {},
  ),
};
