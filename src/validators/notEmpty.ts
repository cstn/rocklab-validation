/**
 * @fileOverview validator for required values
 */

type Value = string | never[] | object | number | boolean | null | undefined;

/**
 * check required value
 * @param {string|never[]|null|undefined} value       the value to check
 * @returns {boolean}
 */
const isNotEmpty = (value: Value) => {
  if (typeof value === 'undefined') {
    return false;
  }

  if (value === null) {
    return false;
  }

  if (Array.isArray(value) && value.length === 0) {
    return false;
  }

  if (typeof value === 'string' && value === '') {
    return false;
  }

  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return false;
  }

  return true;
};

export default isNotEmpty;
