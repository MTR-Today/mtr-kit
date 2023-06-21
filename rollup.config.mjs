import del from 'rollup-plugin-delete'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { visualizer } from 'rollup-plugin-visualizer'

export default [
  {
    input: 'src/main.ts',
    plugins: [
      del({
        targets: ['./dist/'],
      }),
      peerDepsExternal(),
      esbuild(),
      visualizer(),
    ],
    output: [
      {
        file: 'dist/index.js',
        format: 'es',
        sourcemap: true,
      },
    ],
  },
  {
    input: 'src/main.ts',
    plugins: [dts()],
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'es',
      },
    ],
  },
]
