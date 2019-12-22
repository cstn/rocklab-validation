/**
 * @fileOverview validator for required values
 */

const isEmpty = require('./utils/isEmpty');

/**
 * check required value
 * @param value       the value to check
 * @returns {boolean}
 */
const isRequired = value => {
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

module.exports = isRequired;
