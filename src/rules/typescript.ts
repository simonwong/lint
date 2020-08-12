/**
 * 🚀 https://github.com/typescript-eslint/typescript-eslint
 */
module.exports = {
  '@typescript-eslint/no-use-before-define': [
    'error',
    { functions: false, classes: true, variables: true, typedefs: true },
  ],
  '@typescript-eslint/explicit-function-return-type': [
    'off',
    { allowTypedFunctionExpressions: true },
  ],
  '@typescript-eslint/camelcase': 0,
  '@typescript-eslint/no-var-requires': 0,
  '@typescript-eslint/explicit-member-accessibility': 0,
  '@typescript-eslint/interface-name-prefix': 0,
  '@typescript-eslint/no-non-null-assertion': 0,
}
