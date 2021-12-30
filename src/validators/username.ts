/**
 * @fileOverview validator for user account names
 */

import hasLength from './length';

type Options = { min?: number; max?: number };

const REGEX_USERNAME = /^[a-zA-Z0-9._-]+$/;

const isUsername = (value: string, { min = 3, max = 32 }: Options) =>
  REGEX_USERNAME.test(value) && hasLength(value, { min, max });

export default isUsername;
