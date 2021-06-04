import defaultColors from './colors.js';

const toRGB = hexColor => ({
  r: parseInt(hexColor.substr(1, 2), 16),
  g: parseInt(hexColor.substr(3, 2), 16),
  b: parseInt(hexColor.substr(5, 2), 16),
});

const transformColorsToRGBA = colors => {
  Object.keys(colors).forEach(color => {
    Object.keys(colors[color]).forEach(colorKey => {
      const hexColor = colors[color][colorKey];
      // eslint-disable-next-line no-param-reassign
      colors[color][colorKey] = cssVariable => {
        const { r, g, b } = toRGB(hexColor);

        return `rgba(${r}, ${g}, ${b}, ${cssVariable ? `var(${cssVariable})` : 1})`;
      };
    });
  });

  return colors;
};

const getDefaultMediaVariants = breakpoints => ({
  'motion-reduce': '(prefers-reduced-motion: reduce)',
  'motion-safe': '(prefers-reduced-motion: no-preference)',
  ...Object.fromEntries(
    Object.keys(breakpoints).map(breakpoint => [
      breakpoint,
      `(min-width: ${breakpoints[breakpoint]}px)`,
    ]),
  ),
});

const DEFAULT_PALETTE = transformColorsToRGBA(defaultColors);

const DEFAULT_BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

const DEFAULT_PSEUDO_CLASS_VARIANTS = {
  first: 'first-child',
  last: 'last-child',
  odd: 'odd-child',
  even: 'even-child',
  visited: 'visited',
  checked: 'checked',
  'focus-within': 'focus-within',
  hover: 'hover',
  focus: 'focus',
  'focus-visible': 'focus-visible',
  active: 'active',
  disabled: 'disabled',
};

export class ConfigManager {
  set breakpoints(breakpoints) {
    this._breakpoints = breakpoints;
  }

  get breakpoints() {
    return this._breakpoints || DEFAULT_BREAKPOINTS;
  }

  set pseudoClassVariants(pseudoClassVariants) {
    this._pseudoClassVariants = pseudoClassVariants;
  }

  get pseudoClassVariants() {
    return this._pseudoClassVariants || DEFAULT_PSEUDO_CLASS_VARIANTS;
  }

  set mediaVariants(mediaVariants) {
    this._mediaVariants = mediaVariants;
  }

  get mediaVariants() {
    return this._mediaVariants || getDefaultMediaVariants(this.breakpoints);
  }

  set colors(colors) {
    this._colors = transformColorsToRGBA(colors);
  }

  get colors() {
    return this._colors || DEFAULT_PALETTE;
  }
}
