/**
 * @fileOverview validator for passwords
 */

import hasLength from './length';
import { countNumericChars, countSpecialChars, countUpperCase, countLowerCase } from '../utils/string';

type Options = {
  // minimal length
  min?: number;
  // maximal length
  max?: number;
  // minimum upper case chars required
  uppercase?: number;
  // minimum lower case chars required
  lowercase?: number;
  // minimum numeric chars required
  numeric?: number;
  // minimum special chars required
  special?: number;
};

const DEFAULT: Options = {
  min: 8,
  max: 32,
  uppercase: 1,
  lowercase: 1,
  numeric: 1,
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
const isPassword = (value: string, { min, max, lowercase, numeric, special, uppercase }: Options = DEFAULT) => {
  if (!hasLength(value, { min, max })) {
    return false;
  }

  if (typeof lowercase !== 'undefined' && countLowerCase(value) < lowercase) {
    return false;
  }

  if (typeof uppercase !== 'undefined' && countUpperCase(value) < uppercase) {
    return false;
  }

  if (typeof special !== 'undefined' && countSpecialChars(value) < special) {
    return false;
  }

  if (typeof numeric !== 'undefined' && countNumericChars(value) < numeric) {
    return false;
  }

  return true;
};

export default isPassword;
