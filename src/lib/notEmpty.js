/**
 * @fileOverview validator for required values
 */

import isEmpty from './utils/empty';

/**
 * check required value
 * @param value       the value to check
 * @returns {boolean}
 */
const isNotEmpty = value => {
  if (isEmpty(value)) {
    return false;
  }

  if (Array.isArray(value) && value.length === 0) {
    return false;
  }

  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return false;
  }

  return true;
};

export default isNotEmpty;
