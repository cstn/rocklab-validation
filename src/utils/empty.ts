/**
 * @fileOverview check for empty value
 */

/**
 * is value undefined, null or empty string?
 * @param {string | null | undefined} value
 * @returns {boolean}
 */
const isEmpty = (value: string | null | undefined): boolean => {
  if (typeof value === 'undefined' || value === null) {
    return true;
  }

  if (value.length === 0) {
    return true;
  }

  return false;
};

export default isEmpty;
