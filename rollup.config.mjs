import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
  {
    input: "src/main.ts",
    plugins: [peerDepsExternal(), esbuild()],
    output: [
      {
        file: "dist/index.js",
        format: "es",
        sourcemap: true,
      },
    ],
  },
  {
    input: "src/main.ts",
    plugins: [dts()],
    output: [
      {
        file: "dist/index.d.ts",
        format: "es",
      },
    ],
  },
];
