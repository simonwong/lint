/** @format */

const strictEslint = require('./eslint');
const softyEslint = require('./softyEslint');

module.exports = {
  // stylelint,
  // prettier,
  strictEslint,
  eslint: softyEslint,
  default: softyEslint,
};
