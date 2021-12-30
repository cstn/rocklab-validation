/**
 * @fileOverview validators for credit cards
 */

import isEmpty from '../utils/empty';
import checkLuhn from '../utils/luhn';

enum CreditCardType {
  Standard = 'Standard',
  Visa = 'Visa',
  Master = 'Master',
  Amex = 'Amex'
}

type Options = {
  type: CreditCardType;
  cvc?: string;
  expirationDate?: string;
};

const REGEX_NUMBERS: Record<CreditCardType, RegExp> = {
  [CreditCardType.Standard]: /^[\d]{12,}$/,
  [CreditCardType.Visa]: /^4[\d]{15}|4[\d]{12}$/,
  [CreditCardType.Master]: /^5[\d]{15}$/,
  [CreditCardType.Amex]: /^3[\d]{14}$/,
};

const REGEX_CVC: Record<CreditCardType, RegExp> = {
  [CreditCardType.Standard]: /^[0-9]{3}$/,
  [CreditCardType.Visa]: /^[0-9]{3}$/,
  [CreditCardType.Master]: /^[0-9]{3}$/,
  [CreditCardType.Amex]: /^[0-9]{4}$/,
};

/**
 * validate a credit card number
 * @param {String} value
 * @param {CreditCardType} type
 * @returns {*|boolean}
 */
const isCreditCardNumber = (value: string, { type = CreditCardType.Standard }: Options): boolean =>
  !isEmpty(value) && REGEX_NUMBERS[type] && REGEX_NUMBERS[type].test(value) && checkLuhn(value);

/**
 * check the CVC format, DOES NOT CHECK NUMBER ITSELF
 * @param {string} value
 * @param {CreditCardType} type
 * @returns {boolean|*}
 */
const isCVC = (value: string, { type = CreditCardType.Standard }: Options): boolean =>
  !isEmpty(value) && REGEX_CVC[type] && REGEX_CVC[type].test(value);

/**
 * validate a credit card expiration date
 * @param {string} value    date in the format MMYY or MM/YY
 * @returns {boolean}
 */
const isCreditCardExpirationDate = (value: string): boolean => {
  const expirationDateString = value.replace('/', '');

  if (expirationDateString.length < 4) {
    return false;
  }

  const expirationMonth = parseInt(expirationDateString.slice(0, 2), 10);
  const expirationYear = parseInt(expirationDateString.slice(2, 4), 10);

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
 * @param {string} number
 * @param {string} cvc
 * @param {string} expirationDate in the format MMYY or MM/YY
 * @param {CreditCardType} type
 * @returns {boolean}
 */
const isCreditCard = (number: string, { cvc, expirationDate, type = CreditCardType.Standard }: Options) =>
  Boolean(cvc) &&
  Boolean(expirationDate) &&
  isCreditCardNumber(number, { type }) &&
  isCVC(cvc as string, { type }) &&
  isCreditCardExpirationDate(expirationDate as string);

export default isCreditCard;
export { CreditCardType, isCreditCardNumber, isCVC, isCreditCardExpirationDate };
