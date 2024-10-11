# @yueqing/eslint-config-ts

## Usage

```js
// eslint.config.mjs

//@ts-check
import eslintConfig from '@yueqing/eslint-config-ts';

export default eslintConfig({
  project: ['./tsconfig.eslint.json'],
  rootDir: import.meta.dirname,
});
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

## 添加 tailwindcss 的配置

```js
//@ts-check

import eslintConfig from '@yueqing/eslint-config-ts';
import tailwindcssConfig from '@yueqing/eslint-config-ts/tailwindcss-config';

export default eslintConfig(
  {
    project: ['./tsconfig.eslint.json'],
    rootDir: import.meta.dirname,
  },
  [...tailwindcssConfig]
);
```
