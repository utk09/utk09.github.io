// eslint.config.ts
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";
import markdown from "@eslint/markdown";

export default [
  {
    ignores: [
      ".docusaurus",
      "build",
      "dist",
      "node_modules",
      "coverage",
      "reports",
      "*.config.js",
      "eslint.config.ts",
      "vite.config.ts",
      // "README.md",
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  // ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.recommendedTypeChecked.map((config: any) => ({
    ...config,
    files: config.files ?? ["**/*.{ts,tsx,js,jsx}"],
  })),
  ...markdown.configs.recommended,

  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      "@typescript-eslint": tseslint.plugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: prettierPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "prettier/prettier": [
        "error",
        {
          semi: true,
        },
      ],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/no-unnecessary-condition": "warn",
      "@typescript-eslint/strict-boolean-expressions": [
        "off",
        {
          allowString: false,
          allowNumber: false,
          allowNullableObject: true,
          allowNullableBoolean: true,
          allowNullableString: true,
          allowNullableNumber: true,
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: true,
        },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": "allow-with-description",
          "ts-ignore": true,
          "ts-nocheck": true,
          "ts-check": false,
          minimumDescriptionLength: 3,
        },
      ],
      "no-console": ["warn", { allow: ["warn", "error", "debug", "info"] }],
      eqeqeq: ["error", "always"],
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-template": "error",
      "prefer-arrow-callback": "error",
      "no-nested-ternary": "warn",
      "no-unneeded-ternary": "error",
    },
  },
  {
    files: ["**/*.js"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    files: ["**/*.md"],
    ...tseslint.configs.disableTypeChecked,
    plugins: {
      markdown,
    },
    language: "markdown/gfm",
    languageOptions: {
      frontmatter: "yaml",
    },
    rules: {
      "no-irregular-whitespace": "off",
    },
  },
  prettierConfig,
];
