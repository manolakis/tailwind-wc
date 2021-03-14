import { expect } from "@open-wc/testing";
import { breakpoints } from "../../src/core/breakpoints.js";

describe('breakpoints', () => {
  it('should be numeric', () => {
    Object.entries(breakpoints).forEach(([, value]) => {
      expect(value).to.not.be.NaN;
    });
  });
});
