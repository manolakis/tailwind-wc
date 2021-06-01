import {terser} from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/css4wc.js',
  output: {
    file: 'dist/cs4wc.min.js',
    format: 'esm',
    plugins: [terser()]
  },
  plugins: [nodeResolve()]
};
