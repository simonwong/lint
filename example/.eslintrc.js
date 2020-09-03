module.exports = {
  extends: [require.resolve('../lib/ts-eslint')],
  parserOptions: {
    project: './tsconfig.eslint.json',
    createDefaultProgram: true,
  },
  rules: {},
}
