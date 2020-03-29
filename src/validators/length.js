/**
 * @fileOverview validator for array and string length
 */

/**
 * check minimal length
 * @param {String|Array} value
 * @param {number} length
 * @returns {boolean}
 */
const hasMinLength = (value, length) => {
  if (typeof value !== 'string' && !Array.isArray(value)) {
    return false;
  }

  return value.length >= length;
};

/**
 * check maximal length
 * @param {String|Array} value
 * @param {number} length
 * @returns {boolean}
 */
const hasMaxLength = (value, length) => {
  if (typeof value !== 'string' && !Array.isArray(value)) {
    return false;
  }

  return value.length <= length;
};

/**
 * check length
 * @param {String|Array} value
 * @param {number} length
 * @returns {boolean}
 */
const hasExactLength = (value, length) => {
  if (typeof value !== 'string' && !Array.isArray(value)) {
    return false;
  }

  return value.length === length;
};

/**
 * check length
 * @param {String|Array} value
 * @param {number} min
 * @param {number} max
 * @param {number} exact
 * @returns {boolean}
 */
const hasLength = (value, { min, max, exact } = {}) => {
  if (typeof min === 'number' && !hasMinLength(value, min)) {
    return false;
  }

  if (typeof max === 'number' && !hasMaxLength(value, max)) {
    return false;
  }

  if (typeof exact === 'number' && !hasExactLength(value, exact)) {
    return false;
  }

  return true;
};

export default hasLength;
export { hasExactLength, hasMaxLength, hasMinLength };
