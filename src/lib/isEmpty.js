const isEmpty = value => {
  if (typeof value === 'undefined') {
    return true;
  }

  if (typeof value === 'string' && value.length === 0) {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return true;
  }

  return value === null;
};

module.exports = isEmpty;
