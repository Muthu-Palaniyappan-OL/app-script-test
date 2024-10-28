import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

export default {
  input: "src/app.ts",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    copy({
      targets: [{ src: "./src/appsscript.json", dest: "./dist" }],
    }),
  ],
};
