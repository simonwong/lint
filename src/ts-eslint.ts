const reactRules = require('./rules/react')
const importRules = require('./rules/import')
const jsxRules = require('./rules/jsx')
const unicornRules = require('./rules/unicorn')
const esRules = require('./rules/es')
const typescriptRules = require('./rules/typescript')

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['eslint-comments', 'jest', 'unicorn', 'react-hooks'],
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
    ...typescriptRules,
    ...reactRules,
    ...jsxRules,
  },
};

export {};
