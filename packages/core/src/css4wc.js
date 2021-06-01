import { rules } from './rules.js';

const defaultMapper = cssRule => cssRule.toString();

/**
 * css4wc(mapper)('float', 'position', ['hover', 'responsive']);
 */
export const css4wc =
  (mapper = defaultMapper) =>
  (...args) => {
    const options = args[args.length - 1];

    if (!Array.isArray(options)) {
      return css4wc(mapper)(...args, []);
    }

    const variants = {
      mapper,
      ...Object.fromEntries(options.map(option => [option, true])),
    };

    return args.slice(0, args.length - 1).flatMap(rule => rules.get(rule)(variants));
  };
