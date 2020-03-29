/**
 * @fileOverview validator for passwords
 */

import hasLength from './length';
import { countNumericChars, countSpecialChars, countUpperCase, countLowerCase } from '../utils/string';

const DEFAULT_OPTIONS = {
  // minimal length
  min: 8,
  // maximal length
  max: 32,
  // minimum upper case chars required
  uppercase: 1,
  // minimum lower case chars required
  lowercase: 1,
  // minimum numeric chars required
  numeric: 1,
  // minimum special chars required
  special: 1,
};

/**
 * check for valid password
 * @param {String} value      the password text to validate
 * @param {number} min        minimum length required
 * @param {number} max        maximal length allowed
 * @param {number} lowercase  minimal count of lowercase characters required
 * @param {number} numeric    minimal count of numeric characters required
 * @param {number} special    minimal count of special characters required
 * @param {number} uppercase  minimal count of uppercase characters required
 * @returns {boolean}
 */
const isPassword = (value, { min, max, lowercase, numeric, special, uppercase } = DEFAULT_OPTIONS) => {
  if (!hasLength(value, { min, max })) {
    return false;
  }

  if (typeof lowercase === 'number' && countLowerCase(value) < lowercase) {
    return false;
  }

  if (typeof uppercase === 'number' && countUpperCase(value) < lowercase) {
    return false;
  }

  if (typeof special === 'number' && countSpecialChars(value) < lowercase) {
    return false;
  }

  if (typeof numeric === 'number' && countNumericChars(value) < lowercase) {
    return false;
  }

  return true;
};

export default isPassword;
