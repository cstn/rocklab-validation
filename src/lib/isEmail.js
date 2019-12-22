/**
 * @fileOverview validator for email addresses
 */

const isEmpty = require('./utils/isEmpty');

const REGEX_EMAIL = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

const isEmail = value => {
  if (isEmpty(value)) {
    return false;
  }

  return REGEX_EMAIL.test(value);
};

module.exports = isEmail;
