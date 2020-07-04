module.exports = {
  extends: [require.resolve('@yueqing/lint/dist/eslint')],
  rules: {
    'semi': ['error', 'never'], // 无分号
    'indent': ['error', 2], // 缩进2
  },
}
