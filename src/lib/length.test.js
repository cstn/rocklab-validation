/**
 * @fileOverview unit tests for length validator
 */

import { hasMinLength, hasMaxLength, hasLength } from './length';

describe('length', () => {
  describe('hasMinLength', () => {
    it.each([
      ['', 0],
      ['a', 1],
      ['aa', 1],
      [['a'], 1],
      [[2], 1],
    ])('should validate %p has min length %d', (value, length) => {
      expect(hasMinLength(value, length)).toBeTruthy();
    });

    it.each([
      [null, 0],
      ['', 1],
      ['aa', 3],
      [['a'], 2],
      [[2], 2],
    ])('should not validate %p has min length %d', (value, length) => {
      expect(hasMinLength(value, length)).toBeFalsy();
    });
  });

  describe('hasMaxLength', () => {
    it.each([
      ['', 0],
      ['a', 1],
      ['a', 10],
      ['aa', 10],
      [['a'], 1],
      [[2], 1],
      [[2], 10],
    ])('should validate %p has max length %d', (value, length) => {
      expect(hasMaxLength(value, length)).toBeTruthy();
    });

    it.each([
      [null, 0],
      ['a', 0],
      ['aa', 1],
      [['a'], 0],
      [[1, 2], 1],
    ])('should not validate %p has max length %d', (value, length) => {
      expect(hasMaxLength(value, length)).toBeFalsy();
    });
  });

  describe('hasLength', () => {
    it.each([
      ['', 0],
      ['a', 1],
      ['aa', 2],
      [[1, 2], 2],
    ])('should validate %p has length %d', (value, length) => {
      expect(hasLength(value, length)).toBeTruthy();
    });

    it.each([
      [null, 0],
      [1, 1],
      ['a', 2],
      [[1, 2], 1],
    ])('should not validate %p has length %d', (value, length) => {
      expect(hasLength(value, length)).toBeFalsy();
    });
  });
});
