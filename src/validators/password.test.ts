/**
 * @fileOverview unit tests for password validator
 */

import isPassword from './password';

describe('isPassword', () => {
  it.each(['Pa$$w0rd'])('should validate %s', (value) => {
    expect(isPassword(value, { min: 8, max: 32, lowercase: 1, uppercase: 1, numeric: 1, special: 1 })).toBeTruthy();
  });

  it.each(['Abcdefgh1', 'Abcdefgh$', 'abcdefgh$1', 'Abcdefghi$1'])('should not validate %s', (value) => {
    expect(isPassword(value, { min: 8, max: 10, lowercase: 1, uppercase: 1, numeric: 1, special: 1 })).toBeFalsy();
  });
});
