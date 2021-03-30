import { CSSRule } from './CSSRule.js';
import { CSSMedia } from './CSSMedia.js';
import { breakpoints } from './breakpoints.js';
import { mediaVariants } from './mediaVariants.js';
import { pseudoClassVariants } from './pseudoClassVariants.js';
import { camelize, combine } from './utils.js';

const globalCache = new Map();
const globalRulesCache = new Map();

const PSEUDO_CLASS_VARIANTS = Object.keys(pseudoClassVariants);
const MEDIA_VARIANTS = Object.keys(mediaVariants);
const RESPONSIVE_MEDIA_VARIANTS = Object.keys(breakpoints);
const NON_RESPONSIVE_MEDIA_VARIANTS = MEDIA_VARIANTS.filter(key => !breakpoints[key]);

/**
 * Maps the CSSRule or CSSMedia.
 *
 * @param {CSSRule|CSSMedia} cssRule
 * @returns {String}
 */
export const defaultMapper = cssRule => cssRule.toString();

/**
 * Creates a responsive version for the specified rules.
 *
 * @param {string} variant
 * @param {CSSRule[]} cssRules
 * @returns {CSSMedia[]}
 */
const createMediaRule = (variant, cssRules) => {
  const [firstRule] = cssRules;
  const mediaPredicate = mediaVariants[variant](variant);

  if (firstRule instanceof CSSMedia) {
    return [
      new CSSMedia(
        `(${mediaPredicate}) and (${firstRule.predicate})`,
        firstRule.cssRules.map(
          cssRule => new CSSRule(`${variant}\\:${cssRule.className}`, cssRule.body),
        ),
      ),
    ];
  }

  return [
    new CSSMedia(
      mediaPredicate,
      cssRules.map(cssRule => new CSSRule(`${variant}\\:${cssRule.className}`, cssRule.body)),
    ),
  ];
};

/**
 * Creates a variant version of the specified rules.
 *
 * @param {String} variant
 * @param {CSSRule[]} cssRules
 * @returns {CSSRule[]}
 */
const createPseudoClassRules = (variant, cssRules) =>
  cssRules.map(
    cssRule =>
      new CSSRule(
        `${variant}\\:${cssRule.className}:${pseudoClassVariants[variant]}`,
        cssRule.body,
      ),
  );

const createVariants = ({ rules, variant }) => {
  if (PSEUDO_CLASS_VARIANTS.includes(variant)) {
    return createPseudoClassRules(variant, rules);
  }

  if (MEDIA_VARIANTS.includes(variant)) {
    return createMediaRule(variant, rules);
  }

  throw new Error(`Variant ${variant} not found!`);
};

/**
 * Generates the CSS variants for the specified rules.
 *
 * @param {String} scope
 * @param {Array<{className string, body: string}>} baseRules
 * @returns {function(Variants=): *[]}
 */
export const generateVariantsFactory = (scope, baseRules) => {
  if (typeof scope !== 'string' || scope.trim() === '') {
    throw new Error('scope is mandatory and must be a string');
  }

  if (!Array.isArray(baseRules) || baseRules.length === 0) {
    throw new Error(`baseRules must be an array of CSSRules and can't be empty`);
  }

  baseRules.forEach(({ className, body }) => {
    if (!className || !body) {
      throw new Error('base rules should be like { className: string, body: string }');
    }
  });

  if (!globalCache.has(scope)) {
    globalCache.set(scope, new Map());
  }

  const cache = globalCache.get(scope);

  if (!globalRulesCache.has(scope)) {
    globalRulesCache.set(scope, new Map());
  }

  const rulesCache = globalRulesCache.get(scope);

  /**
   * @template T
   * @param {TransformOptions<T>} options
   * @returns {T[]}
   */
  return (options = {}) => {
    const { mapper = defaultMapper, ...variants } = options;

    if (!cache.has(scope)) {
      if (!rulesCache.has(scope)) {
        rulesCache.set(
          scope,
          baseRules.map(({ className, body }) => new CSSRule(className, body)),
        );
      }

      cache.set(
        scope,
        rulesCache.get(scope).map(rule => mapper(rule)),
      );
    }

    const keys = combine(
      [scope],
      PSEUDO_CLASS_VARIANTS.filter(key => variants[camelize(key)]),
      NON_RESPONSIVE_MEDIA_VARIANTS.filter(key => variants[camelize(key)]),
      variants.responsive ? RESPONSIVE_MEDIA_VARIANTS : [],
    );

    keys.forEach(key =>
      key
        .split(':')
        .reverse()
        .reduce((acc, variant) => {
          const variantScope = `${variant}:${acc}`;

          if (!cache.has(variantScope)) {
            if (!rulesCache.has(variantScope)) {
              rulesCache.set(
                variantScope,
                createVariants({
                  rules: rulesCache.get(acc),
                  variant,
                }),
              );
            }

            cache.set(
              variantScope,
              rulesCache.get(variantScope).map(rule => mapper(rule)),
            );
          }

          return variantScope;
        }),
    );

    return keys.flatMap(key => cache.get(key));
  };
};
