import eslint from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
  recommendedConfig: eslint.configs.recommended,
});

export default compat.config({
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'import', 'simple-import-sort'],
  ignorePatterns: [
    'node_modules/',
    'build/',
    'coverage/',
    'public/',
    '.github/',
    'WorkingExample/',
  ],
  overrides: [
    {
      files: ['./src/**/*.{js,jsx,ts,tsx}'],
      rules: {
        // https://eslint.org/docs/latest/rules/
        'no-bitwise': 'error',
        'no-debugger': 'error',
        'no-self-compare': 'error',
        'no-duplicate-imports': 'error',
        'no-constructor-return': 'error',
        'no-constant-binary-expression': 'error',
        'no-unused-private-class-members': 'error',
        'no-empty-function': 'off', // This rule is enabled below in the "@typescript-eslint" plugin
        'array-callback-return': 'error',
        // ---------------------------------------------------------------------------------------------
        // "@typescript-eslint" plugin rules
        // https://typescript-eslint.io/rules/
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'always' }],
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/consistent-indexed-object-style': 'error',
        '@typescript-eslint/ban-ts-comment': [
          'error',
          { 'ts-expect-error': 'allow-with-description' },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          { selector: 'typeAlias', format: ['PascalCase'] },
          { selector: 'interface', format: ['PascalCase'] },
          { selector: 'enum', format: ['PascalCase'] },
          { selector: 'enumMember', format: ['PascalCase'] },
        ],
        // ---------------------------------------------------------------------------------------------
        // "react" plugin rules
        // https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react/no-unescaped-entities': 'off',
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
        // "react-hooks" plugin rules
        // https://legacy.reactjs.org/docs/hooks-rules.html
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        // ---------------------------------------------------------------------------------------------
        // "prettier" plugin rules
        // https://github.com/prettier/eslint-plugin-prettier
        'prettier/prettier': 'error',
        // ---------------------------------------------------------------------------------------------
        // "import" plugin rules
        // https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#rules
        'import/first': 'error',
        'import/no-cycle': 'error',
        'import/no-duplicates': 'error',
        'import/no-default-export': 'error',
        'import/no-useless-path-segments': 'error',
        'import/newline-after-import': 'error',
        // ---------------------------------------------------------------------------------------------
        // "simple-import-sort" plugin rules
        // https://github.com/lydell/eslint-plugin-simple-import-sort
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // React related packages come first.
              ['^react', '^@?\\w'],
              // Internal packages.
              ['^(modules|router|testUtils|theme|types|utils)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ],
          },
        ],
      },
    },
    {
      // Turn OFF some rules for unit tests
      files: ['./src/**/*.test.{js,jsx,ts,tsx}'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],
});
