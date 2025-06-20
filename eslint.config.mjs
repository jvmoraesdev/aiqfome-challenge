import js from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// import testingLibraryPlugin from 'eslint-plugin-testing-library';
// import jestPlugin from 'eslint-plugin-jest';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    plugins: {
      '@next/next': pluginNext
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules
    }
  },
  {
    plugins: { 'react-hooks': reactHooksPlugin },
    rules: {
      'react/react-in-jsx-scope': 'off',
      ...reactHooksPlugin.configs.recommended.rules
    }
  },
  {
    plugins: {
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'unused-imports/no-unused-imports': 'warn',
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn'
    }
  },
  {
    settings: { react: { version: 'detect' } }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'off'
    }
  },
  // jestPlugin.configs['flat/recommended'],
  // testingLibraryPlugin.configs.recommended,
  prettier
]);
