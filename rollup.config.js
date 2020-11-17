import { nodeResolve } from '@rollup/plugin-node-resolve'

export default [
  {
    input: path.resolve(__dirname, 'index.html'),
    output: {
      file: 'index.html'
    }
  },
  {
    input: path.resolve(__dirname, 'src/index.js'),
    file: 'lib/index.js',
    format: 'iife',
    plugin: [
      nodeResolve()
    ]
  }
]