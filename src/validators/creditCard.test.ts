/**
 * @fileOverview unit tests for credit card validators
 */

import isCreditCard, { isCreditCardNumber, isCVC, isCreditCardExpirationDate, CreditCardType } from './creditCard';

const dateMock = new Date('2019-01-01T11:11:11.111Z');

describe('credit card', () => {
  let realDate: DateConstructor;

  beforeAll(() => {
    realDate = Date;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.Date = class extends Date {
      constructor(date: string | number | Date) {
        if (date) {
          // eslint-disable-next-line constructor-super,no-constructor-return,@typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-constructor-return
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
      ['5555555555554444', CreditCardType.Standard],
      ['378282246310005', CreditCardType.Amex],
      ['371449635398431', CreditCardType.Amex],
      ['5555555555554444', CreditCardType.Master],
      ['5105105105105100', CreditCardType.Master],
      ['4111111111111111', CreditCardType.Visa],
      ['4012888888881881', CreditCardType.Visa],
    ])('should validate %s as %s credit card number', (number, type) => {
      expect(isCreditCardNumber(number, { type })).toBeTruthy();
    });

    it.each([
      ['378282246310005', CreditCardType.Master],
      ['378282246310005', CreditCardType.Visa],
      ['5555555555554444', CreditCardType.Amex],
      ['5555555555554444', CreditCardType.Visa],
      ['4111111111111111', CreditCardType.Amex],
      ['4111111111111111', CreditCardType.Master],
    ])('should not validate %s as %s credit card number', (number, type) => {
      expect(isCreditCardNumber(number, { type })).toBeFalsy();
    });
  });

  describe('isCVC', () => {
    it.each([
      ['123', CreditCardType.Standard],
      ['1234', CreditCardType.Amex],
      ['123', CreditCardType.Master],
      ['123', CreditCardType.Visa],
    ])('should validate CVC %s for %p', (number, type) => {
      expect(isCVC(number, { type })).toBeTruthy();
    });

    it.each([
      ['1234', CreditCardType.Standard],
      ['123', CreditCardType.Amex],
      ['1234', CreditCardType.Master],
      ['1234', CreditCardType.Visa],
    ])('should not validate CVC %s for %p', (number, type) => {
      expect(isCVC(number, { type })).toBeFalsy();
    });
  });

  describe('isCreditCardExpirationDate', () => {
    it.each(['0119', '12/19'])('should validate %s as expiration date', (value) => {
      expect(isCreditCardExpirationDate(value)).toBeTruthy();
    });

    it.each(['119', '1/19', '0118', '12/18'])('should not validate %s as expiration date', (value) => {
      expect(isCreditCardExpirationDate(value)).toBeFalsy();
    });
  });

  describe('isCreditCard', () => {
    it.each([
      ['378282246310005', '1234', '12/19', CreditCardType.Amex],
      ['5555555555554444', '123', '12/19', CreditCardType.Master],
      ['4111111111111111', '123', '12/19', CreditCardType.Visa],
    ])('should validate %s as %s credit card', (number, cvc, expirationDate, type) => {
      expect(isCreditCard(number, { cvc, expirationDate, type })).toBeTruthy();
    });

    it.each([
      ['378282246310001', '123', '12/19', CreditCardType.Amex],
      ['378282246310005', '123', '12/19', CreditCardType.Amex],
      ['378282246310005', '1234', '12/18', CreditCardType.Amex],
      ['5555555555554441', '1234', '12/19', CreditCardType.Master],
      ['5555555555554444', '1234', '12/19', CreditCardType.Master],
      ['5555555555554444', '123', '12/18', CreditCardType.Master],
      ['4111111111111112', '1234', '12/19', CreditCardType.Visa],
      ['4111111111111111', '1234', '12/19', CreditCardType.Visa],
      ['4111111111111111', '123', '12/18', CreditCardType.Visa],
    ])('should not validate %s as %s credit card', (number, cvc, expirationDate, type) => {
      expect(isCreditCard(number, { cvc, expirationDate, type })).toBeFalsy();
    });
  });
});
