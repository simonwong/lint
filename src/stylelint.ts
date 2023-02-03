module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'function-url-quotes': 'always',
    // iconfont
    'font-family-no-missing-generic-family-keyword': null,
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['constant'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind'],
      },
    ],
  },
  ignoreFiles: [
    '**/node_modules/**',
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
  ],
}
