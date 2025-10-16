import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import markdown from "@eslint/markdown";

export default [
  // Ignore patterns
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/.next/**", "**/build/**"],
  },
  // Base JS/TS config - explicitly only for JS/TS files
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  // TypeScript config
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ["**/*.{ts,mts,cts,tsx}"],
  })),
  // JSON config
  {
    files: ["**/*.json"],
    ignores: ["**/package-lock.json", "**/pnpm-lock.json"],
    plugins: { json },
    language: "json/json",
    rules: json.configs.recommended.rules,
  },
  {
    files: ["**/*.jsonc"],
    plugins: { json },
    language: "json/jsonc",
    rules: json.configs.recommended.rules,
  },
  // Markdown config
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    rules: markdown.configs.recommended[0]?.rules || {},
  },
];
