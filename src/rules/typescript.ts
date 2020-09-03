/**
 * 🚀 https://github.com/typescript-eslint/typescript-eslint
 */
module.exports = {
  '@typescript-eslint/member-delimiter-style': [2, {
    multiline: {
      delimiter: 'none',
      requireLast: false
    },
    singleline: {
      delimiter: 'semi',
      requireLast: true
    },
  }],
  '@typescript-eslint/no-non-null-assertion': 2,
}
