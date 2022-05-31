# lint

An extensible shared Configuration collection for eslint, prettier and stylelint.

![test](https://github.com/simonwong/lint/workflows/test/badge.svg)


## Usage

**Install**

```shell
npm install @yueqing/lint -S
# or
yarn add @yueqing/lint
```

**Quick Create config file**

```shell
npx yq-lint
# or
yarn yq-lint
```

**Use in project**

```
|- .eslintrc.js
|- .prettierrc.js
|- .stylelintrc.js
|- package.json
|- tsconfig.eslint.json (if needed)
```


### `.eslintrc.js`

为了方便 js 项目的配置，继承的 eslintrc 文件分成了两个。`eslint` 和 `ts-eslint`。



js 项目的配置，适用于绝大部分项目

```javascript
module.exports = {
  extends: [require.resolve('@yueqing/lint/lib/eslint')],
  rules: {
    // custom rules
  },
}
```

ts 项目的配置，也兼容项目中 js、jsx 文件的校验，适用于所有项目

```javascript
module.exports = {
  extends: [require.resolve('@yueqing/lint/lib/ts-eslint')],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    // custom rules
  },
}
```

`parserOptions.project` 配置是必须的，指向你项目中的 `tsconfig.json`, 或者再创建一个 `tsconfig.eslint.json` 。一般更建议再创建一个，他们 include 的内容不同。


**tsconfig.eslint.json**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "allowJs": true,
    "jsx": "react",
    "resolveJsonModule": true
  },
  "include": [
    "**/*.js",
    "**/*.ts",
    "**/*.jsx",
    "**/*.d.ts",
    "**/*.tsx"
  ],
}
```

`parserOptions` 的配置可以参考 [typescript-eslint-parser 文档](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration)


### `.prettierrc.js`

```javascript
const prettier = require('@yueqing/lint').prettier;

module.exports = {
  ...prettier,
};
```

### `.stylelintrc.js`

```javascript
module.exports = {
  extends: [require.resolve('@yueqing/lint/lib/stylelint')],
  rules: {
  },
};
```

## 推荐配置

### 搭配 `husky` `lint-staged` 食用

```shell
yarn add husky lint-staged -D
```

**`package.json`**

```json
{
  "scripts": {
    "prepare": "husky install",
    "lint": "yarn lint:js && yarn lint:style",
    "lint:js": "eslint --ext .js,.ts,.jsx,.tsx --format=pretty ./src",
    "lint:style": "stylelint \"src/**/*.less\" --syntax less",
    "lint:fix": "eslint --fix --ext .js,.ts,.jsx,.tsx --format=pretty ./src && stylelint --fix \"src/**/*.less\" --syntax less"
  },
  "lint-staged": {
    "**/*.{js,ts,jsx,tsx}": [
      "prettier --write",
      "eslint --fix --format=pretty"
    ],
    "**/*.less": [
      "stylelint --syntax less --fix"
    ]
  }
}
```

执行 `npm run prepare`
执行 `npx husky add .husky/pre-commit "npx lint-staged"`

### 搭配 VSCode 插件

安装 `eslint` `stylelint` `prettier`  `EditorConfig for VS Code` 插件


**vscode `config.json`**

该配置可以在保存文件时自动格式化文件

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.fixAll.stylelint": true,
},
```

**在项目中加入配置 `.editorconfig`**

```
# editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```
