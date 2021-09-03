import { rules } from './rules.js';

/**
 * tailwind(mapper)('float', 'position', ['hover', 'responsive']);
 */
export const tailwind = mapper => (...args) => {
  const options = args[args.length - 1];

  if (!Array.isArray(options)) {
    return tailwind(mapper)(...args, []);
  }

  const variants = {
    mapper,
    ...Object.fromEntries(options.map(option => [option, true])),
  };

  return args.slice(0, args.length - 1).flatMap(rule => rules.get(rule)(variants));
};
