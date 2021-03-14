import { interpolate } from './utils.js';
import { CSSRule } from './CSSRule.js';

/**
 * Represents a CSS Media Rule.
 */
export class CSSMedia {
  /**
   * Creates a new instance of a CSSRule.
   *
   * @param {String} predicate
   * @param {Array<CSSRule>} cssRules
   */
  constructor(predicate, cssRules = []) {
    if (typeof predicate !== 'string' || predicate.trim() === '') {
      throw new Error('predicate is required and must be a string');
    }

    if (!Array.isArray(cssRules) || cssRules.length === 0) {
      throw new Error(`cssRules must be an array of CSSRules and can't be empty`);
    }

    cssRules.forEach(rule => {
      if (!(rule instanceof CSSRule)) {
        throw new Error('All rules should be instances of CSSRule');
      }
    });

    this._predicate = predicate;
    this._cssRules = cssRules;
  }

  /** Get the media predicate. */
  get predicate() {
    return this._predicate;
  }

  /** Get the css rules. */
  get cssRules() {
    return this._cssRules;
  }

  toString() {
    return interpolate`@media(${this.predicate}) {\n\t${this.cssRules.map(cssRule =>
      cssRule.toString(),
    )}\n}`;
  }
}
