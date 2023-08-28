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
  UsernameOption,
} from './validators';
import { Validator, ValidatorOptions } from './validators/types';

type Check<M> = {
  validator: Validator;
  message: M;
  options?: ValidatorOptions;
};

type Value = object[] | string[] | number[] | string | number | null;

/**
 * apply multiple validators to a value
 * @param {Value} value
 * @param {Check[]} checks  list of checks to execute
 * @returns {Array}
 */
const validate = <M>(value: Value, checks: Check<M>[] = []): M[] =>
  checks
    .map(({ validator, message, options }) => {
      switch (validator) {
        case Validator.BIC:
          return isBIC(value as string, options as BICOptions) ? null : message;
        case Validator.CreditCard:
          return isCreditCard(value as string, options as CreditCardOptions) ? null : message;
        case Validator.Email:
          return isEmail(value as string) ? null : message;
        case Validator.IBAN:
          return isIBAN(value as string, options as IBANOptions) ? null : message;
        case Validator.Length:
          return hasLength(value, options as LengthOptions) ? null : message;
        case Validator.NotEmpty:
          return isNotEmpty(value) ? null : message;
        case Validator.Password:
          return isPassword(value as string, options as PasswordOptions) ? null : message;
        case Validator.Username:
          return isUsername(value as string, options as UsernameOption) ? null : message;
        default:
          throw new Error(`Unknown validator "${validator}"`);
      }
    })
    .filter(Boolean) as M[];

export default validate;
export { Check };
