/**
 * @fileOverview validator for BIC (Bank Identifier Code)
 */

import isEmpty from '../utils/empty';

// IIIICCLLXXX, I = Institution, C = Country, L = Location, X = Branch, XXX is optional
const REGEX_SWIFT = /^([a-zA-Z]){4}([a-zA-Z]){2}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})?$/;

/**
 * check for a BIC (Bank Identifier Code)?
 * @param value         the value to check
 * @param countryCode   check the county
 * @returns {boolean}
 */
const isBIC = (value, countryCode) => {
  if (isEmpty(value)) {
    return false;
  }

  if (countryCode && countryCode !== value.substring(4, 6)) {
    return false;
  }

  return REGEX_SWIFT.test(value);
};

export default isBIC;
