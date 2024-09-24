import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import externals from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default defineConfig({
  input: "src/index.ts",
  plugins: [
    typescript(),
    json(),
    postcss({
      extensions: [".css"],
    }),
    externals({ includeDependencies: true }),
  ],
  output: [
    {
      format: "esm",
      dir: "./lib/esm",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
    },
    {
      format: "commonjs",
      file: "./lib/cjs/bundle.cjs",
      sourcemap: true,
    },
  ],
});
