/**
 * @fileOverview validator helper
 */

import * as validators from './validators';
import { Validator, ValidatorOptions } from './validators/types';

const VALID = '__VALID__';

type Check = {
  validator: Validator;
  message: string;
  options?: ValidatorOptions;
};

type Value = string | number | boolean | never[] | object;
type ValidatorFunction = (value: Value, option?: ValidatorOptions) => boolean;

const VALIDATORS: Record<string, any> = {
  [Validator.BIC]: validators.isBIC,
  [Validator.CreditCard]: validators.isCreditCard,
  [Validator.Email]: validators.isEmail,
  [Validator.IBAN]: validators.isIBAN,
  [Validator.Length]: validators.hasLength,
  [Validator.NotEmpty]: validators.isNotEmpty,
  [Validator.Password]: validators.isPassword,
  [Validator.Username]: validators.isUsername,
};

/**
 * apply multiple validators to a value
 * @param {String|Number|Boolean|Object} value
 * @param {Check[]} checks  list of checks to execute
 * @returns {[]}
 */
const validate = (value: Value, checks: Check[] = []) =>
  checks
    .map(({ validator, message, options }) => {
      const validatorFunction = VALIDATORS[validator] as ValidatorFunction;

      if (!validatorFunction) {
        throw new Error(`Unknown validator "${validator}"`);
      }

      return validatorFunction(value, options) ? VALID : message;
    })
    .filter((result) => result !== VALID);

export default validate;
export { Check };
