import libraryConfig from "./library.js";
import * as drizzlePlugin from "eslint-plugin-drizzle";

/** @type {import("eslint").Linter.Config} */
export default [
  ...libraryConfig,
  {
    files: ["**/*.ts"],
    plugins: {
      drizzle: drizzlePlugin,
    },
    rules: {
      "drizzle/enforce-delete-with-where": "error",
      "drizzle/enforce-update-with-where": "error",
    },
  },
];
