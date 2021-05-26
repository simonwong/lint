module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-prettier',
    'stylelint-config-rational-order'
  ],
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'function-url-quotes': 'always',
    // iconfont
    'font-family-no-missing-generic-family-keyword': null,
    'unit-no-unknown': [true, {
      ignoreUnits: ['rpx']
    }],
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['extends', 'tailwind']
    }]
  },
  // https://stylelint.io/user-guide/configure#ignorefiles
  // The ignoreFiles property is stripped from extended configs: only the root-level config can ignore files.
  // ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
