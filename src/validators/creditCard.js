/**
 * @fileOverview validators for credit cards
 */

import isEmpty from '../utils/empty';
import checkLuhn from '../utils/luhn';

const TYPE = {
  STANDARD: 'STANDARD',
  AMEX: 'AMEX',
  VISA: 'VISA',
  MASTER: 'MASTER',
};

const REGEX_NUMBERS = {
  STANDARD: /^[\d]{12,}$/,
  VISA: /^4[\d]{15}|4[\d]{12}$/,
  AMEX: /^3[\d]{14}$/,
  MASTER: /^5[\d]{15}$/,
};

const REGEX_CVC = {
  STANDARD: /^[0-9]{3}$/,
  VISA: /^[0-9]{3}$/,
  MASTER: /^[0-9]{3}$/,
  AMEX: /^[0-9]{4}$/,
};

/**
 * validate a credit card number
 * @param {String} value
 * @param {TYPE} type
 * @returns {*|boolean}
 */
const isCreditCardNumber = (value, type = TYPE.STANDARD) =>
  !isEmpty(value) && REGEX_NUMBERS[type] && REGEX_NUMBERS[type].test(value) && checkLuhn(value);

/**
 * check the CVC format, DOES NOT CHECK NUMBER ITSELF
 * @param {String} value
 * @param {TYPE} type
 * @returns {boolean|*}
 */
const isCVC = (value, type = TYPE.STANDARD) => !isEmpty(value) && REGEX_CVC[type] && REGEX_CVC[type].test(value);

/**
 * validate a credit card expiration date
 * @param {String} value    date in the format MMYY or MM/YY
 * @returns {boolean}
 */
const isCreditCardExpirationDate = value => {
  if (typeof value !== 'string') {
    return false;
  }

  const expirationDateString = value.replace('/', '');

  if (expirationDateString.length < 4) {
    return false;
  }

  const expirationMonth = parseInt(expirationDateString.substr(0, 2), 10);
  const expirationYear = parseInt(expirationDateString.substr(2, 2), 10);

  if (Number.isNaN(expirationMonth) || Number.isNaN(expirationYear)) {
    return false;
  }

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear() % 100;

  if (currentYear > expirationYear) {
    return false;
  }

  if (currentYear < expirationYear) {
    return true;
  }

  return currentMonth <= expirationMonth;
};

/**
 * validate a credit card, checks only the format, no real card check against a card provider
 * @param {String} number
 * @param {String} cvc
 * @param {String} expirationDate in the format MMYY or MM/YY
 * @param {TYPE} type
 * @returns {boolean}
 */
const isCreditCard = (number, cvc, expirationDate, type = TYPE.STANDARD) =>
  isCreditCardNumber(number, type) && isCVC(cvc, type) && isCreditCardExpirationDate(expirationDate);

export default isCreditCard;
export { TYPE, isCreditCardNumber, isCVC, isCreditCardExpirationDate };
