const reactRules = require('./rules/react')
const importRules = require('./rules/import')
const jsxRules = require('./rules/jsx')
const esRules = require('./rules/es')
const typescriptRules = require('./rules/typescript')

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
  ],
  plugins: [
    'prettier',
    'eslint-comments',
    'jest',
    'react-hooks',
  ],
  ignorePatterns: ['.eslintrc.js'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  rules: {
    'prettier/prettier': 'error',
    ...importRules,
    ...esRules,
    ...typescriptRules,
    ...reactRules,
    ...jsxRules,
  },
}

export {}
