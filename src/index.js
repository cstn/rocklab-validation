/**
 * @fileOverview validators
 */

import isBIC from './lib/bic';
import isCreditCard, {
  TYPE as CREDIT_CARD_TYPE,
  isCreditCardNumber,
  isCVC,
  isCreditCardExpirationDate,
} from './lib/creditCard';
import isEmail from './lib/email';
import isIBAN from './lib/iban';
import isNotEmpty from './lib/notEmpty';
import hasLength, { hasExactLength, hasMaxLength, hasMinLength } from './lib/length';
import isPassword from './lib/password';
import isUsername from './lib/username';

export default {
  CREDIT_CARD_TYPE,
  hasExactLength,
  hasMaxLength,
  hasMinLength,
  hasLength,
  isBIC,
  isCreditCard,
  isCreditCardExpirationDate,
  isCreditCardNumber,
  isCVC,
  isEmail,
  isIBAN,
  isNotEmpty,
  isUsername,
  isPassword,
};
