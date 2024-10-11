import js from '@eslint/js';
import tseslint, { ConfigWithExtends } from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import '@typescript-eslint/utils';

const tsAndTsxFile = '**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}';

export default (
  {
    project,
    rootDir,
  }: {
    project: string[] | boolean | string | null;
    rootDir: string;
  },
  morConfigs: ConfigWithExtends[] = []
) => {
  const reactConfig = [
    {
      files: [tsAndTsxFile],
      ...reactPlugin.configs.flat.recommended,
      languageOptions: {
        ...reactPlugin.configs.flat.recommended.languageOptions,
        globals: {
          ...globals.serviceworker,
          ...globals.browser,
        },
      },
    },
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
    reactPlugin.configs.flat['jsx-runtime'],
    {
      files: [tsAndTsxFile],
      plugins: {
        'react-hooks': reactHooksPlugin,
      },
      rules: {
        ...reactHooksPlugin.configs.recommended.rules,
      },
    },
    {
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
    {
      rules: {
        'react/prop-types': 'off',
      },
    },
  ] as ConfigWithExtends[];

  const importConfig = [
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
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
      rules: {
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'type',
              'internal',
              'index',
              'sibling',
              'parent',
              'object',
            ],
          },
        ],
      },
    },
  ] as ConfigWithExtends[];

  const tsConfig = [
    ...tseslint.configs.recommendedTypeChecked,
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
      rules: {
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ] as ConfigWithExtends[];

  return tseslint.config(
    js.configs.recommended,
    ...importConfig,
    ...reactConfig,
    ...tsConfig,
    prettierConfig,
    ...morConfigs
  );
};
