/**
 * 🚀 https://github.com/yannickcr/eslint-plugin-react
 */
module.exports = {
  // props 空格
  'react/jsx-indent-props': [2, 2],
  // props 参数换行
  'react/jsx-max-props-per-line': [2, {
    maximum: 1,
    when: 'multiline'
  }],
  // 自闭合标签对其位置
  'react/jsx-closing-bracket-location': [2, {
    'nonEmpty': 'tag-aligned',
    'selfClosing': 'tag-aligned'
  }],
  // 必须写 PropTypes => off
  'react/prop-types': 0,
  // 不能单行子元素/表达式 => off
  'react/jsx-one-expression-per-line': 0,
  // 不能使用解构 => off
  'react/jsx-props-no-spreading': 0,
  // state 必须放 constructor => off
  'react/state-in-constructor': 0,
  // 循环不能使用 index 作为 key => off
  'react/no-array-index-key': 0,
}
