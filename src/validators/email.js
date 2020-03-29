/**
 * @fileOverview validator for email addresses
 */

import isEmpty from '../utils/empty';

const REGEX_EMAIL = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

const isEmail = value => !isEmpty(value) && REGEX_EMAIL.test(value);

export default isEmail;
