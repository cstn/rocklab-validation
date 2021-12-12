/**
 * @fileOverview unit tests for credit card validators
 */

import isCreditCard, { isCreditCardNumber, isCVC, isCreditCardExpirationDate, TYPE } from './creditCard';

const dateMock = new Date('2019-01-01T11:11:11.111Z');

describe('credit card', () => {
  let realDate;

  beforeAll(() => {
    realDate = Date;
    global.Date = class extends Date {
      constructor(date) {
        if (date) {
          // eslint-disable-next-line constructor-super,no-constructor-return
          return super(date);
        }

        // eslint-disable-next-line no-constructor-return
        return dateMock;
      }
    };
  });

  afterAll(() => {
    global.Date = realDate;
  });

  describe('isCreditCardNumber', () => {
    it.each([
      ['5555555555554444', TYPE.STANDARD],
      ['378282246310005', TYPE.AMEX],
      ['371449635398431', TYPE.AMEX],
      ['5555555555554444', TYPE.MASTER],
      ['5105105105105100', TYPE.MASTER],
      ['4111111111111111', TYPE.VISA],
      ['4012888888881881', TYPE.VISA],
    ])('should validate %s as %s credit card number', (number, type) => {
      expect(isCreditCardNumber(number, type)).toBeTruthy();
    });

    it.each([
      [null, undefined],
      [undefined, undefined],
      [1, undefined],
      ['378282246310005', TYPE.MASTER],
      ['378282246310005', TYPE.VISA],
      ['5555555555554444', TYPE.AMEX],
      ['5555555555554444', TYPE.VISA],
      ['4111111111111111', TYPE.AMEX],
      ['4111111111111111', TYPE.MASTER],
    ])('should not validate %s as %s credit card number', (number, type) => {
      expect(isCreditCardNumber(number, type)).toBeFalsy();
    });
  });

  describe('isCVC', () => {
    it.each([
      ['123', undefined],
      ['123', TYPE.STANDARD],
      ['1234', TYPE.AMEX],
      ['123', TYPE.MASTER],
      ['123', TYPE.VISA],
    ])('should validate CVC %s for %p', (number, type) => {
      expect(isCVC(number, type)).toBeTruthy();
    });

    it.each([
      [null, undefined],
      [undefined, undefined],
      ['1234', TYPE.STANDARD],
      ['123', TYPE.AMEX],
      ['1234', TYPE.MASTER],
      ['1234', TYPE.VISA],
    ])('should not validate CVC %s for %p', (number, type) => {
      expect(isCVC(number, type)).toBeFalsy();
    });
  });

  describe('isCreditCardExpirationDate', () => {
    it.each(['0119', '12/19'])('should validate %s as expiration date', value => {
      expect(isCreditCardExpirationDate(value)).toBeTruthy();
    });

    it.each([null, undefined, 119, '119', '1/19', '0118', '12/18'])(
      'should not validate %s as expiration date',
      value => {
        expect(isCreditCardExpirationDate(value)).toBeFalsy();
      }
    );
  });

  describe('isCreditCard', () => {
    it.each([
      ['378282246310005', '1234', '12/19', TYPE.AMEX],
      ['5555555555554444', '123', '12/19', TYPE.MASTER],
      ['4111111111111111', '123', '12/19', TYPE.VISA],
    ])('should validate %s as %s credit card', (number, cvc, date, type) => {
      expect(isCreditCard(number, cvc, date, type)).toBeTruthy();
    });

    it.each([
      ['378282246310001', '123', '12/19', TYPE.AMEX],
      ['378282246310005', '123', '12/19', TYPE.AMEX],
      ['378282246310005', '1234', '12/18', TYPE.AMEX],
      ['5555555555554441', '1234', '12/19', TYPE.MASTER],
      ['5555555555554444', '1234', '12/19', TYPE.MASTER],
      ['5555555555554444', '123', '12/18', TYPE.MASTER],
      ['4111111111111112', '1234', '12/19', TYPE.VISA],
      ['4111111111111111', '1234', '12/19', TYPE.VISA],
      ['4111111111111111', '123', '12/18', TYPE.VISA],
    ])('should not validate %s as %s credit card', (number, cvc, date, type) => {
      expect(isCreditCard(number, cvc, date, type)).toBeFalsy();
    });
  });
});
