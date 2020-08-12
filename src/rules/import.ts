module.exports = {
  /**
   * 🚀 https://github.com/benmosher/eslint-plugin-import
   */
  'import/no-cycle': 0,
  'import/prefer-default-export': 'off',
  'import/no-default-export': [0, 'camel-case'],
  'import/no-unresolved': [
    2,
    {
      ignore: ['^@/', '^@@/'],
      caseSensitive: true,
      commonjs: true,
    },
  ],
  'import/order': 'warn',
  'import/no-extraneous-dependencies': [
    2,
    {
      optionalDependencies: true,
      devDependencies: [
        '**/tests/**.{ts,js,jsx,tsx}',
        '**/_test_/**.{ts,js,jsx,tsx}',
        '/mock/**/**.{ts,js,jsx,tsx}',
        '**/**.test.{ts,js,jsx,tsx}',
        '**/_mock.{ts,js,jsx,tsx}',
        '**/example/**.{ts,js,jsx,tsx}',
        '**/examples/**.{ts,js,jsx,tsx}',
      ],
    },
  ],
  'import/extensions': 0,
}
