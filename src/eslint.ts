const reactRules = require('./rules/react')
const importRules = require('./rules/import')
const jsxRules = require('./rules/jsx')
const esRules = require('./rules/es')

module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
  ],
  plugins: [
    'prettier',
    'eslint-comments',
    'jest',
    'react-hooks',
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
    'prettier/prettier': 'error',
    ...importRules,
    ...esRules,
    ...reactRules,
    ...jsxRules,
  },
  parserOptions: {
    babelOptions: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
      ],
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
    },
    requireConfigFile: false
  },
};

export {};
