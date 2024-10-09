// @ts-check

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

const tsAndTsxFile = '**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}';

/**
 * @param {{ project: string[] | boolean | string | null, rootDir: string }} params - 函数参数
 */
export default ({ project, rootDir }) => {
  const reactConfig = [
    /** @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig.Config} */ ({
      files: [tsAndTsxFile],
      ...reactPlugin.configs.flat.recommended,
      languageOptions: {
        ...reactPlugin.configs.flat.recommended.languageOptions,
        globals: {
          ...globals.serviceworker,
          ...globals.browser,
        },
      },
    }),
    {
      files: [tsAndTsxFile],
      ...jsxA11y.flatConfigs.recommended,
      languageOptions: {
        ...jsxA11y.flatConfigs.recommended.languageOptions,
        globals: {
          ...globals.serviceworker,
          ...globals.browser,
        },
      },
    },
    /** @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig.Config} */ (
      reactPlugin.configs.flat['jsx-runtime']
    ),
    {
      files: [tsAndTsxFile],
      plugins: {
        'react-hooks': reactHooksPlugin,
      },
      rules: {
        ...reactHooksPlugin.configs.recommended.rules,
      },
    },
  ];

  return tseslint.config(
    js.configs.recommended,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    ...reactConfig,
    ...tseslint.configs.recommendedTypeChecked,
    prettierConfig,
    {
      languageOptions: {
        parserOptions: {
          // projectService: true,
          project: project,
          tsconfigRootDir: rootDir,
        },
      },
    },
    {
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            project: project,
          },
          node: true,
        },
      },
    },
    {
      settings: {
        react: {
          version: 'detect',
        },
      },
    }
  );
};
