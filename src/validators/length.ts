/**
 * @fileOverview validator for array and string length
 */

type Options = {
  length?: number;
  min?: number;
  max?: number;
  exact?: number;
};

type Value = object[] | string[] | number[] | string | number | null;

/**
 * check minimal length
 * @param {string|Array} value
 * @param {number} length
 * @returns {boolean}
 */
const hasMinLength = (value: Value, { length }: Options): boolean => {
  if (typeof value !== 'string' && !Array.isArray(value)) {
    return false;
  }

  return typeof length !== 'undefined' && value.length >= length;
};

/**
 * check maximal length
 * @param {string|Array} value
 * @param {number} length
 * @returns {boolean}
 */
const hasMaxLength = (value: Value, { length }: Options): boolean => {
  if (typeof value !== 'string' && !Array.isArray(value)) {
    return false;
  }

  return typeof length !== 'undefined' && value.length <= length;
};

/**
 * check length
 * @param {string|Array} value
 * @param {number} length
 * @returns {boolean}
 */
const hasExactLength = (value: Value, { length }: Options): boolean => {
  if (typeof value !== 'string' && !Array.isArray(value)) {
    return false;
  }

  return typeof length !== 'undefined' && value.length === length;
};

/**
 * check length
 * @param {String|Array} value
 * @param {number} min
 * @param {number} max
 * @param {number} exact
 * @returns {boolean}
 */
const hasLength = (value: Value, { min, max, exact }: Options): boolean => {
  if (typeof min !== 'undefined' && !hasMinLength(value, { length: min })) {
    return false;
  }

  if (typeof max !== 'undefined' && !hasMaxLength(value, { length: max })) {
    return false;
  }

  if (typeof exact !== 'undefined' && !hasExactLength(value, { length: exact })) {
    return false;
  }

  return true;
};

export default hasLength;
export { hasExactLength, hasMaxLength, hasMinLength };
