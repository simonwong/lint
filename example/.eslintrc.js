module.exports = {
  extends: [require.resolve('@yueqing/lint/lib/eslint')],
  // extends: [require.resolve('../lib/eslint')],
  rules: {
    'semi': ['error', 'never'], // 无分号
    'indent': ['error', 2], // 缩进2
  },
}
