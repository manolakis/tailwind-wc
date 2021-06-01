/**
 * Converts from kebab-case to camelCase.
 *
 * @param {string} value
 * @returns {string}
 */
export const camelize = value =>
  value
    .split('-')
    .map((item, index) =>
      index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase(),
    )
    .join('');

/**
 * Interpolates a template literal joining a list of values if needed.
 *
 * @param {Array<string>} strings
 * @param {Array<string>} values
 * @returns {string}
 */
export const interpolate = (strings, ...values) =>
  values.reduce(
    (acc, value, idx) =>
      acc + (Array.isArray(value) ? value.join('\n\t') : value) + strings[idx + 1],
    strings[0],
  );

/**
 * Escapes a CSS class name.
 *
 * @param {string} name
 * @returns {string}
 */
export const escape = name => {
  const [initial] = name;

  if (Number.isNaN(parseInt(initial, 10))) {
    return name;
  }

  return `\\3${initial} ${name.substr(1)}`;
};

/**
 * Combines groups of strings using ':' as separator.
 *
 * @param {Array<string>} groups
 * @returns {Array<string>}
 */
export const combine = (...groups) =>
  groups.reduce((result, group) => [
    ...result,
    ...group.flatMap(item => result.map(scope => `${item}:${scope}`)),
  ]);
