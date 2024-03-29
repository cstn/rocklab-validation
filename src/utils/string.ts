/**
 * @fileOverview string utils
 */

const REGEX_SPECIAL_CHARS = /[\s_\-+*,;.:!§$%&/\\()?]/;
const REGEX_NUMERIC = /[0-9]/;

const isUpperCase = (c: string): boolean => Boolean(c) && c !== c.toLocaleLowerCase();

const isLowerCase = (c: string): boolean => Boolean(c) && c !== c.toLocaleUpperCase();

const isSpecialChar = (c: string): boolean => Boolean(c) && REGEX_SPECIAL_CHARS.test(c);

const isNumericChar = (c: string): boolean => Boolean(c) && REGEX_NUMERIC.test(c);

/**
 * count upper case chars
 * @param {string} text
 * @returns {number}
 */
const countUpperCase = (text: string): number =>
  text.split('').reduce((accumulator, current) => (isUpperCase(current) ? accumulator + 1 : accumulator), 0);

/**
 * count lower case chars
 * @param {string} text
 * @returns {number}
 */
const countLowerCase = (text: string): number =>
  text.split('').reduce((accumulator, current) => (isLowerCase(current) ? accumulator + 1 : accumulator), 0);

/**
 * count numeric chars (0-9)
 * @param {String} text
 * @returns {number}
 */
const countNumericChars = (text: string): number =>
  text.split('').reduce((accumulator, current) => (isNumericChar(current) ? accumulator + 1 : accumulator), 0);

/**
 * count special chars
 * @param {String} text
 * @returns {number}
 */
const countSpecialChars = (text: string): number =>
  text.split('').reduce((accumulator, current) => (isSpecialChar(current) ? accumulator + 1 : accumulator), 0);

export { countLowerCase, countNumericChars, countSpecialChars, countUpperCase };
