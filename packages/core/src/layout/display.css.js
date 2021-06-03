export default {
  ...[
    'block',
    'inline-block',
    'inline',
    'flex',
    'inline-flex',
    'table',
    'inline-table',
    'table-caption',
    'table-cell',
    'table-column',
    'table-column-group',
    'table-footer-group',
    'table-header-group',
    'table-row-group',
    'table-row',
    'flow-root',
    'grid',
    'inline-grid',
    'contents',
    'list-item',
    'hidden',
  ].reduce(
    (acc, key) => ({
      ...acc,
      [key]: { display: key },
    }),
    {},
  ),
};