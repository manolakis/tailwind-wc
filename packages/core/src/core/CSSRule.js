import { escape, interpolate } from './utils.js';

/**
 * Represents a CSS Rule.
 */
export class CSSRule {
  /**
   * Creates a new instance of a CSSRule.
   *
   * @param {String} className
   * @param {String} body
   */
  constructor(className, body) {
    if (typeof className !== 'string' || className.trim() === '') {
      throw new Error('className is required and must be a string');
    }

    if (typeof body !== 'string' || body.trim() === '') {
      throw new Error('body is required and must be a string');
    }

    this._className = className;
    this._body = body;
  }

  /** Gets the class name. */
  get className() {
    return this._className;
  }

  /** Gets the css body. */
  get body() {
    return this._body;
  }

  toString() {
    return interpolate`.${escape(this.className)} { ${this.body} }`;
  }
}
