module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-prettier',
    'stylelint-config-rational-order'
  ],
  plugins: [
    'stylelint-declaration-block-no-ignored-properties'
  ],
  rules: {
    'function-url-quotes': 'always',
    // iconfont
    'font-family-no-missing-generic-family-keyword': null,
    'plugin/declaration-block-no-ignored-properties': true,
    'unit-no-unknown': [true, {
      ignoreUnits: ['rpx']
    }],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
