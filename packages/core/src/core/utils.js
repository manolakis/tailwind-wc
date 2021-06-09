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

/**
 * Normalize an hex color to have 6 characters instead of 3.
 *
 * @param {string} value - hex color to normalize
 * @returns {string} - normalized hex color
 */
const normalizeHex = value => {
  const normalizedHex = ['0x'];
  let hex = value.substring(1).split('');

  if (hex.length === 3) {
    const [red, green, blue] = hex;

    hex = [red, red, green, green, blue, blue];
  }

  return normalizedHex.concat(hex).join('');
};

/**
 * Transforms an hex color into an object with decimal values for red, green and blue colors.
 *
 * @param {string} hexColor - hex color
 * @param {string|number} alpha - alpha channel for color transparency
 * @returns {string}
 */
export const hexToRgba = (hexColor, alpha = 1) => {
  const color = normalizeHex(hexColor);
  const red = parseInt(color.substr(1, 2), 16);
  const green = parseInt(color.substr(3, 2), 16);
  const blue = parseInt(color.substr(5, 2), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};
