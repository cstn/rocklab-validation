/**
 * @fileOverview validator for user account names
 */

import hasLength from './length';

type Options = { min?: number; max?: number };

const DEFAULT: Options = { min: 3, max: 32 };

const REGEX_USERNAME = /^[a-zA-Z0-9._-]+$/;

const isUsername = (value: string, options: Options = DEFAULT) =>
  REGEX_USERNAME.test(value) && hasLength(value, { min: options?.min, max: options?.max });

export default isUsername;
export { Options };
