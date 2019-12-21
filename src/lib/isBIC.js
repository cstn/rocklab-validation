/**
 * @fileOverview check Bank Identifier Code
 */

const isEmpty = require('./isEmpty');

// IIIICCLLXXX, I = Institution, C = Country, L = Location, X = Branch, XXX is optional
const REGEX_SWIFT = /^([a-zA-Z]){4}([a-zA-Z]){2}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})?$/;

/**
 * is it a BIC (Bnak Identifier Code)?
 * @param value         the value to check
 * @param countryCode   check the county
 * @returns {boolean}
 */
const isBIC = (value, countryCode) => {
  if (isEmpty(value)) {
    return false;
  }

  if (!REGEX_SWIFT.test(value)) {
    return false;
  }

  if (countryCode && countryCode !== value.substring(4, 6)) {
    return false;
  }

  return true;
};

module.exports = isBIC;
