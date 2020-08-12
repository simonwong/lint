const reactRules = require('./rules/react')
const importRules = require('./rules/import')
const jsxRules = require('./rules/jsx')
const unicornRules = require('./rules/unicorn')
const esRules = require('./rules/es')
const typescriptRules = require('./rules/typescript')

const tsOverride = {
  files: ['*.ts', '*.tsx'],
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    // TODO: 兼容项目的 tsconfig 或 jsconfig
    project: './tsconfig.eslint.json',
    createDefaultProgram: true,
  },
  rules: {
    ...typescriptRules,
  }
}

const reactOverride = {
  files: ['*.jsx', '*.tsx'],
  extends: [
    'prettier/react',
  ],
  plugins: ['react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    ...reactRules,
    ...jsxRules,
  }
}

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
  ],
  plugins: ['eslint-comments', 'jest', 'unicorn'],
  overrides: [
    tsOverride,
    reactOverride,
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  rules: {
    ...importRules,
    ...unicornRules,
    ...esRules,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
      }
    },
    polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
  },
};
