import { breakpoints } from '../../src/core/breakpoints.js';

export default Object.fromEntries(
  Object.entries(breakpoints).map(([key, width]) => [key, { width, height: 1024 }]),
);
