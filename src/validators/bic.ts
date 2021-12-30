/**
 * @fileOverview validator for BIC (Bank Identifier Code)
 */

import isEmpty from '../utils/empty';

// IIIICCLLXXX, I = Institution, C = Country, L = Location, X = Branch, XXX is optional
const REGEX_SWIFT = /^([a-zA-Z]){4}([a-zA-Z]){2}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})?$/;

type Options = {
  countryCode?: string;
};

/**
 * check for a BIC (Bank Identifier Code)?
 * @param {string} value      the value to check
 * @param {Options} options
 * @returns {boolean}
 */
const isBIC = (value: string, options?: Options): boolean => {
  if (isEmpty(value)) {
    return false;
  }

  if (Boolean(options?.countryCode) && options?.countryCode !== value.substring(4, 6)) {
    return false;
  }

  return REGEX_SWIFT.test(value);
};

export default isBIC;
export { Options };
