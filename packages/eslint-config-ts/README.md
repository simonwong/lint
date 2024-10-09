# @yueqing/eslint-config-ts

## Usage

```js
// eslint.config.mjs

//@ts-check
import eslintConfig from '@yueqing/eslint-config-ts';

export default [
  ...eslintConfig,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
```

tsconfig.eslint.json:

```json
{
  "extends": "./tsconfig.json",
  "include": ["**/*.ts", "**/*.tsx", "**/*.mjs", "**/*.js"]
}
```

## VSCode config

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```
