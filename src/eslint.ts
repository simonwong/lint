const reactRules = require('./rules/react')
const importRules = require('./rules/import')
const jsxRules = require('./rules/jsx')
const esRules = require('./rules/es')

module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['prettier', 'jest', 'react-hooks'],
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
        require.resolve('@babel/preset-env'),
        require.resolve('@babel/preset-react'),
      ],
      plugins: [
        [
          require.resolve('@babel/plugin-proposal-decorators'),
          { legacy: true },
        ],
        [
          require.resolve('@babel/plugin-proposal-class-properties'),
          { loose: true },
        ],
      ],
    },
    requireConfigFile: false,
  },
}

export {}
