/**
 * @fileOverview IBAN validator
 */

import isEmpty from '../utils/empty';

// IBAN format patterns map by country code
const REGEX_PATTERNS = {
  AL: /^AL\d{10}[0-9A-Z]{16}$/,
  AD: /^AD\d{10}[0-9A-Z]{12}$/,
  AT: /^AT\d{18}$/,
  BH: /^BH\d{2}[A-Z]{4}[0-9A-Z]{14}$/,
  BE: /^BE\d{14}$/,
  BA: /^BA\d{18}$/,
  BG: /^BG\d{2}[A-Z]{4}\d{6}[0-9A-Z]{8}$/,
  HR: /^HR\d{19}$/,
  CY: /^CY\d{10}[0-9A-Z]{16}$/,
  CZ: /^CZ\d{22}$/,
  DK: /^DK\d{16}$/,
  FO: /^FO\d{16}$/,
  GL: /^GL\d{16}$/,
  DO: /^DO\d{2}[0-9A-Z]{4}\d{20}$/,
  EE: /^EE\d{18}$/,
  FI: /^FI\d{16}$/,
  FR: /^FR\d{12}[0-9A-Z]{11}\d{2}$/,
  GE: /^GE\d{2}[A-Z]{2}\d{16}$/,
  DE: /^DE\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{2}|DE\d{20}$/,
  GI: /^GI\d{2}[A-Z]{4}[0-9A-Z]{15}$/,
  GR: /^GR\d{9}[0-9A-Z]{16}$/,
  HU: /^HU\d{26}$/,
  IS: /^IS\d{24}$/,
  IE: /^IE\d{2}[A-Z]{4}\d{14}$/,
  IL: /^IL\d{21}$/,
  IT: /^IT\d{2}[A-Z]\d{10}[0-9A-Z]{12}$/,
  KZ: /^KZ\d{5}[0-9A-Z]{13}$/,
  KW: /^KW\d{2}[A-Z]{4}22!$/,
  LV: /^LV\d{2}[A-Z]{4}[0-9A-Z]{13}$/,
  LB: /^LB\d{6}[0-9A-Z]{20}$/,
  LI: /^LI\d{7}[0-9A-Z]{12}$/,
  LT: /^LT\d{18}$/,
  LU: /^LU\d{5}[0-9A-Z]{13}$/,
  MK: /^MK\d{5}[0-9A-Z]{10}\d{2}$/,
  MT: /^MT\d{2}[A-Z]{4}\d{5}[0-9A-Z]{18}$/,
  MR: /^MR13\d{23}$/,
  MU: /^MU\d{2}[A-Z]{4}\d{19}[A-Z]{3}$/,
  MC: /^MC\d{12}[0-9A-Z]{11}\d{2}$/,
  ME: /^ME\d{20}$/,
  NL: /^NL\d{2}[A-Z]{4}\d{10}$/,
  NO: /^NO\d{13}$/,
  PL: /^PL\d{26}$/,
  PT: /^PT\d{23}$/,
  RO: /^RO\d{2}[A-Z]{4}[0-9A-Z]{16}$/,
  SM: /^SM\d{2}[A-Z]\d{10}[0-9A-Z]{12}$/,
  SA: /^SA\d{4}[0-9A-Z]{18}$/,
  RS: /^RS\d{20}$/,
  SK: /^SK\d{22}$/,
  SI: /^SI\d{17}$/,
  ES: /^ES\d{22}$/,
  SE: /^SE\d{22}$/,
  CH: /^CH\d{7}[0-9A-Z]{12}$/,
  TN: /^TN59\d{20}$/,
  TR: /^TR\d{7}[0-9A-Z]{17}$/,
  AE: /^AE\d{21}$/,
  GB: /^GB\d{2}[A-Z]{4}\d{14}$/,
};

/**
 * check IBAN checksum
 * @param {String} iban   the IBAN
 * @returns {boolean}
 */
const hasValidChecksum = iban => {
  const countryCode = iban.substring(0, 2);
  const checksum = iban.substring(2, 4);
  const ban = iban.substring(4) + countryCode + checksum; // move country code and checksum to end

  // convert alphanumeric chars to digits
  const digits = ban
    .split('')
    .map(c => {
      if (c >= '0' && c <= '9') {
        return c;
      }
      if (c >= 'A' && c <= 'Z') {
        return `${c.charCodeAt(0) - 55}`;
      }

      throw new Error('Invalid character in IBAN');
    })
    .join('');

  const modulo97 = digits
    .split('')
    .reduce((accumulator, current) => (accumulator * 10 + parseInt(current, 10)) % 97, 0);

  return modulo97 === 1;
};

/**
 * check IBAN
 * @param {String} value         the IBAN
 * @param {String} countryCode   2 digit county code (optional, enables country specific check only)
 * @returns {boolean}
 */
const isIBAN = (value, countryCode) => {
  if (isEmpty(value)) {
    return false;
  }

  if (!countryCode) {
    // no country code specified? Look for any matching pattern
    const country = Object.keys(REGEX_PATTERNS).find(code => REGEX_PATTERNS[code].test(value));

    if (!country) {
      return false;
    }
  } else {
    // country code specified: check only the corresponding pattern
    const regex = REGEX_PATTERNS[countryCode];

    if (!regex) {
      return false;
    }

    if (!regex.test(value)) {
      return false;
    }
  }

  try {
    return hasValidChecksum(value);
  } catch {
    return false;
  }
};

export default isIBAN;
