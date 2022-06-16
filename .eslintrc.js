module.exports = {
  extends: [require.resolve('./lib/ts-eslint')],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-console': 0
  },
}
