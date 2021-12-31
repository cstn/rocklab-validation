/**
 * @fileOverview unit tests for validate
 */

import { validate, Validator } from './index';

describe('validate', () => {
  it('should require validator name', () => {
    const value = 'test';

    expect(() => {
      const validator = 'answerToTheQuestionOfLife' as Validator;

      validate(value, [{ validator, message: 'It should be 42' }]);
    }).toThrow('Unknown validator "answerToTheQuestionOfLife"');
  });

  it('should validate', () => {
    const value = 'test';

    const result = validate(value, [{ validator: Validator.NotEmpty, message: 'Required' }]);

    expect(result).toHaveLength(0);
  });

  it('should invalidate', () => {
    const value = 'test';

    const result = validate(value, [
      { validator: Validator.NotEmpty, message: 'Required' },
      { validator: Validator.Length, message: '3-6 chars', options: { min: 2, max: 3 } },
    ]);

    expect(result).toEqual(['3-6 chars']);
  });
});
