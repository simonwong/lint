# lint

![test](https://github.com/simonwong/lint/workflows/test/badge.svg)


## Usage

**Install**

```shell
npm install @yueqing/lint -S
# or
yarn add @yueqing/lint
```

**Use in projrct**

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

`parserOptions.project` 配置是必须的，指向你项目中的 `tsconfig.json`, 或者如下，再创建一个 `tsconfig.eslint.json` 。一般更建议再创建一个，他们 include 的内容不同。

```json
// 也可以 "extends": "./tsconfig.json"
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

不过请注意 `parserOptions.createDefaultProgram` 配置，设置为 `true` 将会带来巨大的性能消耗，不推荐开启。（本项目也是为了更流畅的开发体验，不得不让用户手动配置 `parserOptions.project`）


### `.prettierrc.js`

```javascript
const fabric = require('@yueqing/lint');

module.exports = {
  ...fabric.prettier,
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
  // ...
  "scripts": {
    "lint": "yarn lint:js && yarn lint:style",
    "lint:js": "eslint --ext .js,.ts,.jsx,.tsx --format=pretty ./src",
    "lint:style": "stylelint \"src/**/*.less\" --syntax less",
    "lint:fix": "eslint --fix --ext .js,.ts,.jsx,.tsx --format=pretty ./src && stylelint --fix \"src/**/*.less\" --syntax less"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
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

### 搭配 VSCode 插件食用

安装 `eslint` `stylelint` `prettier`  `EditorConfig for VS Code` 插件


**vscode `config.json`**

```json
// 必备，保存文件时自动格式化文件
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.fixAll.stylelint": true,
},

// 进阶，配置文件默认的格式化工具，开始丧心病狂
"editor.defaultFormatter": "esbenp.prettier-vscode",
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[json]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[graphql]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
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

## ps

所有的配置方式都不是固定的，根据项目灵活调整
