export default {
  ...[
    [
      'sans',
      [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    ],
    ['serif', ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']],
    [
      'mono',
      [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    ],
  ].reduce(
    (acc, [key, value]) => ({
      ...acc,
      [`font-${key}`]: {
        'font-family': value
          .map(fontName => (fontName.includes(' ') ? `"${fontName}"` : fontName))
          .join(', '),
      },
    }),
    {},
  ),
};
