/**
 * @fileOverview unit tests for user account name validator
 */

import isUsername from './username';

describe('isUsername', () => {
  it.each(['abc', '12345678', 'AAA', 'a-b_c.d'])('should validate %s', value => {
    expect(isUsername(value, { min: 3, max: 8 })).toBeTruthy();
  });

  it.each([undefined, null, 'aa', '123456789', 'a@b.c'])('should not validate %s', value => {
    expect(isUsername(value, { min: 3, max: 8 })).toBeFalsy();
  });
});
