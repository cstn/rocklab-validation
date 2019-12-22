/**
 * @fileOverview validators
 * @type {isEmpty}
 */
const isBIC = require('./lib/isBIC');
const isEmpty = require('./lib/isRequired');

module.exports = {
  isBIC,
  isEmpty,
};
