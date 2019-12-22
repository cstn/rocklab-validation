/**
 * @fileOverview unit tests
 */

const isBIC = require('./isBIC');

describe('isBIC', () => {
  it.each([undefined, null, '', 'DEUTDEBBXXXX'])('should not validate %s', value => {
    expect(isBIC(value)).toBeFalsy();
  });

  it.each`
    bic              | country
    ${'DEUTDEBBXXX'} | ${'FR'}
    ${'BNPAFRPPXXX'} | ${'DE'}
  `('should not validate $bic for country $country', ({ bic, country }) => {
  expect(isBIC(bic, country)).toBeFalsy();
});

  it.each(['DEUTDEFFXXX', 'BARCGB22XXX', 'BNPAFRPPXXX'])('should validate %s', value => {
    expect(isBIC(value)).toBeTruthy();
  });

  it.each`
    bic              | country
    ${'DEUTDEBBXXX'} | ${'DE'}
    ${'BNPAFRPPXXX'} | ${'FR'}
  `('should validate $bic for country $country', ({ bic, country }) => {
  expect(isBIC(bic, country)).toBeTruthy();
});
});
