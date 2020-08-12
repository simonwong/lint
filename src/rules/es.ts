/**
 * 🚀 http://eslint.cn/
 */
module.exports = {
  'generator-star-spacing': 0,
  'function-paren-newline': 0,
  'linebreak-style': 0,
  // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
  'no-prototype-builtins': 'off',
  'sort-imports': 0,
  // Use function hoisting to improve code readability
  'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
  // Makes no sense to allow type inferrence for expression parameters, but require typing the response
  // Conflict with prettier
  'arrow-body-style': 0,
  'arrow-parens': 0,
  'object-curly-newline': 0,
  'implicit-arrow-linebreak': 0,
  'operator-linebreak': 0,
  'eslint-comments/no-unlimited-disable': 0,
  'no-param-reassign': 2,
  'space-before-function-paren': 0,
}
