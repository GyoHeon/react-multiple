/** @type {import('rollup').RollupOptions} */

import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import { defineConfig } from "rollup";
import typescript from "rollup-plugin-typescript2";

const rollupConfig = defineConfig({
  external: ["react", "react-dom/client", "react/jsx-runtime"],
  input: "src/index.ts",
  output: {
    format: "es",
    exports: "named",
    file: "build/index.js",
    plugins: [terser()],
  },
  plugins: [
    commonjs(),
    // nodeResolve(),
    typescript({ tsconfig: "./tsconfig.json" }),
  ],
});

export default rollupConfig;
