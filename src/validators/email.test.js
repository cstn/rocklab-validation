/**
 * @fileOverview unit tests for email validator
 */

import isEmail from './email';

describe('isEmail', () => {
  it.each(['1@12.de', 'a@test.com', 'a.b@test.com', 'a-b@test.com', 'a_b@test.com', 'A%B@test.com'])(
    'should validate %s',
    value => {
      expect(isEmail(value)).toBeTruthy();
    }
  );

  it.each([undefined, null, '', 'a.test.com', 'a@b.c'])('should not validate %s', value => {
    expect(isEmail(value)).toBeFalsy();
  });
});
