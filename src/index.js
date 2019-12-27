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
import { hasLength, hasMaxLength, hasMinLength } from './lib/length';

export default {
  CREDIT_CARD_TYPE,
  isBIC,
  isCreditCard,
  isCreditCardExpirationDate,
  isCreditCardNumber,
  isCVC,
  isEmail,
  isIBAN,
  isNotEmpty,
  hasMaxLength,
  hasMinLength,
  hasLength,
};
