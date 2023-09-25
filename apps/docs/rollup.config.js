import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
  external: ["react-html"],
  input: "src/util/index.ts",
  output: {
    format: "es",
    exports: "named",
    file: "index.js",
    plugins: [terser()],
  },
  plugins: [typescript({ tsconfig: "./tsconfig.json" })],
};
