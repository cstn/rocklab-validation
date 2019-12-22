/**
 * @fileOverview validators
 */

const isEmail = require('./lib/email');
const isBIC = require('./lib/bic');
const isNotEmpty = require('./lib/notEmpty');

module.exports = {
  isEmail,
  isBIC,
  isNotEmpty,
};
