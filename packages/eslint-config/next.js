import baseConfig from "./base.js";
import nextPlugin from "@next/eslint-plugin-next";
import react from "eslint-plugin-react";

/** @type {import("eslint").Linter.Config} */
export default [
  ...baseConfig,
  // React and Next.js specific settings
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      react,
      nextPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/prop-types": "off", // Using TypeScript
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
