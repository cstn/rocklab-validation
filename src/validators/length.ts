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
 * @param {Options} options
 * @returns {boolean}
 */
const hasMinLength = (value: Value, options: Options): boolean => {
  if (typeof value !== 'string' && !Array.isArray(value)) {
    return false;
  }

  return typeof options.length !== 'undefined' && value.length >= options.length;
};

/**
 * check maximal length
 * @param {string|Array} value
 * @param {Options} options
 * @returns {boolean}
 */
const hasMaxLength = (value: Value, options: Options): boolean => {
  if (typeof value !== 'string' && !Array.isArray(value)) {
    return false;
  }

  return typeof options.length !== 'undefined' && value.length <= options.length;
};

/**
 * check length
 * @param {string|Array} value
 * @param {Options} options
 * @returns {boolean}
 */
const hasExactLength = (value: Value, options: Options): boolean => {
  if (typeof value !== 'string' && !Array.isArray(value)) {
    return false;
  }

  return typeof options.length !== 'undefined' && value.length === options.length;
};

/**
 * check length
 * @param {String|Array} value
 * @param {Options} options
 * @returns {boolean}
 */
const hasLength = (value: Value, options: Options): boolean => {
  if (typeof options.min !== 'undefined' && !hasMinLength(value, { length: options.min })) {
    return false;
  }

  if (typeof options.max !== 'undefined' && !hasMaxLength(value, { length: options.max })) {
    return false;
  }

  if (typeof options.exact !== 'undefined' && !hasExactLength(value, { length: options.exact })) {
    return false;
  }

  return true;
};

export default hasLength;
export { Options, hasExactLength, hasMaxLength, hasMinLength };
