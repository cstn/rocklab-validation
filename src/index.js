/**
 * @fileOverview validators
 */

import isCreditCard, {
  TYPE as CREDIT_CARD_TYPE,
  isCreditCardNumber,
  isCVC,
  isCreditCardExpirationDate,
} from './lib/creditCard';
import isEmail from './lib/email';
import isBIC from './lib/bic';
import isNotEmpty from './lib/notEmpty';
import { hasLength, hasMaxLength, hasMinLength } from './lib/length';

export default {
  CREDIT_CARD_TYPE,
  isCreditCard,
  isCreditCardExpirationDate,
  isCreditCardNumber,
  isCVC,
  isEmail,
  isBIC,
  isNotEmpty,
  hasMaxLength,
  hasMinLength,
  hasLength,
};
