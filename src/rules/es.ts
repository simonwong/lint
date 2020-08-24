/**
 * 🚀 http://eslint.cn/
 */
module.exports = {
  // 封号
  'semi': [2, 'never', { "beforeStatementContinuationChars": "always" }],
  // 参数括号
  'arrow-parens': [2, "as-needed", { "requireForBlockBody": true }],
  // 方法名与参数的空格
  'space-before-function-paren': [2, "always"],
  // 禁止直接使用 prototype => off
  'no-prototype-builtins': 0,
  // 操作符换行 => off
  'operator-linebreak': 0,
  // 实参不允许修改 => off
  'no-param-reassign': 0,
  // i++ => off
  'no-plusplus': 0,
  // 直接使用全局变量 => off
  'no-restricted-globals': 0,
}
