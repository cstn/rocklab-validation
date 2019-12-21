const isEmpty = require('./isEmpty');

describe('isEmpty', () => {
  it('should validate an empty string', () => {
    expect(isEmpty('')).toBeTruthy();
  });

  it('should not validate a string', () => {
    expect(isEmpty(' ')).toBeFalsy();
  });
});
