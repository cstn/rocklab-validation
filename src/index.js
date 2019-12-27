/**
 * @fileOverview validators
 */

import isEmail from './lib/email';
import isBIC from './lib/bic';
import isNotEmpty from './lib/notEmpty';
import { hasLength, hasMaxLength, hasMinLength } from './lib/length';

export default {
  isEmail,
  isBIC,
  isNotEmpty,
  hasMaxLength,
  hasMinLength,
  hasLength,
};
