/**
 * @fileOverview validator helper
 */

import * as validators from './validators';

const VALID = '__VALID__';

/**
 * apply multiple validators to a value
 * @param {String|Number|Boolean|Object} value
 * @param {Array} checks  list of checks ([validator, message] or [validator, message, validator params]
 * @returns {[]}
 */
const validate = (value, checks = []) =>
  checks
    .map(([name, message, params]) => {
      const validator = validators[name];

      if (!validator) {
        throw new Error(`Unknown validator "${name}"`);
      }

      return validator(value, params) ? VALID : message;
    })
    .filter(result => result !== VALID);

export default validate;
