/**
 * @fileOverview validation
 */

import { Validator } from './validators/types';
import validate, { Check } from './validate';
import {
  isBIC,
  isCreditCard,
  isCreditCardExpirationDate,
  isCreditCardNumber,
  isCVC,
  isEmail,
  isIBAN,
  isNotEmpty,
  isPassword,
  isUsername,
  hasLength,
  hasExactLength,
  hasMaxLength,
  hasMinLength
} from './validators';

export {
  Validator,
  Check,
  validate,
  isBIC,
  isCreditCard,
  isCreditCardExpirationDate,
  isCreditCardNumber,
  isCVC,
  isEmail,
  isIBAN,
  isNotEmpty,
  isPassword,
  isUsername,
  hasLength,
  hasExactLength,
  hasMaxLength,
  hasMinLength
};
