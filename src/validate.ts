/**
 * @fileOverview validator helper
 */

import {
  isBIC,
  isCreditCard,
  isEmail,
  isIBAN,
  hasLength,
  isNotEmpty,
  isPassword,
  isUsername,
  BICOptions,
  IBANOptions,
  CreditCardOptions,
  LengthOptions,
  PasswordOptions,
  UsernameOption
} from './validators';
import { Validator, ValidatorOptions } from './validators/types';

const VALID = '__VALID__';

type Check = {
  validator: Validator;
  message: string;
  options?: ValidatorOptions;
};

type Value = object[] | string[] | number[] | string | number | null;

/**
 * apply multiple validators to a value
 * @param {Value} value
 * @param {Check[]} checks  list of checks to execute
 * @returns {[]}
 */
const validate = (value: Value, checks: Check[] = []) =>
  checks
    .map(({ validator, message, options }) => {
      switch (validator) {
        case Validator.BIC:
          return isBIC(value as string, options as BICOptions) ? VALID : message;
        case Validator.CreditCard:
          return isCreditCard(value as string, options as CreditCardOptions) ? VALID : message;
        case Validator.Email:
          return isEmail(value as string) ? VALID : message;
        case Validator.IBAN:
          return isIBAN(value as string, options as IBANOptions) ? VALID : message;
        case Validator.Length:
          return hasLength(value, options as LengthOptions) ? VALID : message;
        case Validator.NotEmpty:
          return isNotEmpty(value) ? VALID : message;
        case Validator.Password:
          return isPassword(value as string, options as PasswordOptions) ? VALID : message;
        case Validator.Username:
          return isUsername(value as string, options as UsernameOption) ? VALID : message;
        default:
          throw new Error(`Unknown validator "${validator}"`);
      }
    })
    .filter((result) => result !== VALID);

export default validate;
export { Check };
