/**
 * 🚀 http://eslint.cn/
 */
module.exports = {
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
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'LabeledStatement',
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],
}
