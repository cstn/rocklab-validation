/**
 * @fileOverview validator for array and string length
 */

const hasMinLength = (value, length) => {
  if (typeof value !== 'string' && !Array.isArray(value)) {
    return false;
  }

  return value.length >= length;
};

const hasMaxLength = (value, length) => {
  if (typeof value !== 'string' && !Array.isArray(value)) {
    return false;
  }

  return value.length <= length;
};

const hasLength = (value, length) => {
  if (typeof value !== 'string' && !Array.isArray(value)) {
    return false;
  }

  return value.length === length;
};

export { hasLength, hasMaxLength, hasMinLength };
