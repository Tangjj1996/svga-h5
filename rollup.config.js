import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html'
import { babel } from '@rollup/plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    dir: 'lib',
    format: 'iife',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    html(),
    babel({
      presets: ['@babel/preset-env']
    })
  ],
};
