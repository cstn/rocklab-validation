/**
 * @fileOverview unit tests
 */

import isRequired from './notEmpty';

describe('notEmpty', () => {
  it.each([undefined, null, '', [], {}])('should not validate %s', value => {
    expect(isRequired(value)).toBeFalsy();
  });

  it.each([' ', 0, 42, true, false, [1], { a: 1 }, () => {}])('should validate %s', value => {
    expect(isRequired(value)).toBeTruthy();
  });
});
