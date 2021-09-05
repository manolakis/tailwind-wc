export default {
  ...[
    [0, true, () => 0],
    ['px', true, sign => `${sign}1px`],
    ['auto', false, () => 'auto'],
    ...[
      0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44,
      48, 52, 56, 60, 64, 72, 80, 96,
    ].map(key => [key, true, sign => `${sign}${key * 0.25}rem`]),
  ].reduce(
    (acc, [key, negative, getValue]) => ({
      ...acc,
      ...(negative ? ['', '-'] : ['']).reduce(
        (acc2, sign) => ({
          [`${sign}m-${key}`]: { margin: getValue(sign) },
          [`${sign}my-${key}`]: { 'margin-top': getValue(sign), 'margin-bottom': getValue(sign) },
          [`${sign}mx-${key}`]: { 'margin-left': getValue(sign), 'margin-right': getValue(sign) },
          [`${sign}mt-${key}`]: { 'margin-top': getValue(sign) },
          [`${sign}mr-${key}`]: { 'margin-right': getValue(sign) },
          [`${sign}mb-${key}`]: { 'margin-bottom': getValue(sign) },
          [`${sign}ml-${key}`]: { 'margin-left': getValue(sign) },
        }),
        {},
      ),
    }),
    {},
  ),
};
