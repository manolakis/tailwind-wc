import { expect } from "@open-wc/testing";
import { CSSMedia } from "../../src/core/CSSMedia.js";
import { CSSRule } from "../../src/core/CSSRule.js";

const createCSSMedia = ({
    predicate = 'min-width: 600px',
    cssRules = [new CSSRule('sample', 'color: red')],
  } = {}) => new CSSMedia(predicate, cssRules);

describe('CSSMedia', () => {
  it('should be constructable', () => {
    createCSSMedia();
  });

  it('should throw if no predicate is provided', () => {
    expect(() => createCSSMedia({ predicate: null })).to.throw();
  });

  it('should throw if the predicate is not a String', () => {
    expect(() => createCSSMedia({ predicate: 34 })).to.throw();
  });

  it('should throw if the predicate is an empty String', () => {
    expect(() => createCSSMedia({ predicate: '' })).to.throw();
  });

  it('should throw if the cssRules are not an array', () => {
    expect(() => createCSSMedia({ cssRules: 'string' })).to.throw();
  });

  it('should throw if the cssRules is an empty array', () => {
    expect(() => createCSSMedia({ cssRules: [] })).to.throw();
  });

  it('should throw if the cssRules contains an element different than a CSSRule', () => {
    expect(() => createCSSMedia({ cssRules: [cssRule, 'string'] })).to.throw();
  });

  it('should create the media query calling toString()', () => {
    const cssMedia = createCSSMedia();
    const { predicate, cssRules: [ cssRule ]} = cssMedia;

    expect(cssMedia.toString()).to.be.equal(
      `@media(${predicate}) {\n\t${cssRule.toString()}\n}`,
    );
  });
});
