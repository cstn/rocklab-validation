/**
 * @fileOverview check for empty value
 */

/**
 * is value undefined, null or empty string?
 * @param value
 * @returns {boolean}
 */
const isEmpty = value => {
  if (typeof value === 'undefined' || value === null) {
    return true;
  }

  if (typeof value === 'string' && value.length === 0) {
    return true;
  }

  return false;
};

export default isEmpty;
