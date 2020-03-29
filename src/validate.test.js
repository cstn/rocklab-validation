/**
 * @fileOverview unit tests for validate
 */

import validate from './validate';

describe('validate', () => {
  it('should require validator name', () => {
    const value = 'test';

    expect(() => {
      validate(value, [['answerToTheQuestionOfLife', 'It should be 42']]);
    }).toThrow('Unknown validator "answerToTheQuestionOfLife"');
  });

  it('should validate', () => {
    const value = 'test';

    const result = validate(value, [
      ['isNotEmpty', 'Required'],
      ['hasMinLength', 'Minimum 3 chars', 3],
      ['hasMaxLength', 'Maximum 5 chars', 5],
    ]);

    expect(result).toHaveLength(0);
  });

  it('should invalidate', () => {
    const value = 'test';

    const result = validate(value, [
      ['isNotEmpty', 'Required'],
      ['hasMinLength', 'Minimum 6 chars', 6],
      ['hasMaxLength', 'Maximum 3 chars', 3],
    ]);

    expect(result).toEqual(['Minimum 6 chars', 'Maximum 3 chars']);
  });
});
