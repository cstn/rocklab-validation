/**
 * @fileOverview unit tests for BIC validator
 */

import isBIC from './bic';

describe('isBIC', () => {
  it.each(['', 'DEUTDEBBXXXX'])('should not validate %s', (value) => {
    expect(isBIC(value)).toBeFalsy();
  });

  it.each`
    bic              | countryCode
    ${'DEUTDEBBXXX'} | ${'FR'}
    ${'BNPAFRPPXXX'} | ${'DE'}
  `('should not validate $bic for country $country', ({ bic, countryCode }: { bic: string; countryCode: string }) => {
    expect(isBIC(bic, { countryCode })).toBeFalsy();
  });

  it.each(['DEUTDEFFXXX', 'BARCGB22XXX', 'BNPAFRPPXXX'])('should validate %s', (value) => {
    expect(isBIC(value)).toBeTruthy();
  });

  it.each`
    bic              | countryCode
    ${'DEUTDEBBXXX'} | ${'DE'}
    ${'BNPAFRPPXXX'} | ${'FR'}
  `('should validate $bic for country $country', ({ bic, countryCode }: { bic: string; countryCode: string }) => {
    expect(isBIC(bic, { countryCode })).toBeTruthy();
  });
});
