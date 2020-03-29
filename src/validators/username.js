/**
 * @fileOverview validator for user account names
 */

import hasLength from './length';

const REGEX_USERNAME = /^[a-zA-Z0-9._-]+$/;

const isUsername = (value, { min = 3, max = 32 }) => REGEX_USERNAME.test(value) && hasLength(value, { min, max });

export default isUsername;
