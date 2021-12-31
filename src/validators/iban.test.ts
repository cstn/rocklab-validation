/**
 * @fileOverview unit tests for IBAN validator
 */

import isIBAN from './iban';

describe('isIBAN', () => {
  it.each([
    ['AL90208110080000001039531801', 'AL'],
    ['BE68844010370034', 'BE'],
    ['DK5750510001322617', 'DK'],
    ['DE12500105170648489890', undefined],
    ['DE12500105170648489890', 'DE'],
    ['EE342200221034126658', 'EE'],
    ['FI9814283500171141', 'FI'],
    ['FR7630066100410001057380116', 'FR'],
    ['GB32ESSE40486562136016', 'GB'],
    ['IE92BOFI90001710027952', 'IE'],
    ['IT68D0300203280000400162854', 'IT'],
    ['LI1008800000020176306', 'LI'],
    ['MT98MMEB44093000000009027293051', 'MT'],
    ['MC1112739000700011111000H79', 'MC'],
    ['NL18ABNA0484869868', 'NL'],
    ['AT022050302101023600', 'AT'],
    ['PL61109010140000071219812874', 'PL'],
    ['PT50003506830000000784311', 'PT'],
    ['SM86U0322509800000000270100', 'SM'],
    ['SE6412000000012170145230', 'SE'],
    ['CH3908704016075473007', 'CH'],
    ['SK9311110000001057361004', 'SK'],
    ['SI56031001001300933', 'SI'],
    ['ES1020903200500041045040', 'ES'],
    ['CZ4201000000195505030267', 'CZ'],
    ['HU29117080012054779400000000', 'HU'],
  ])('should validate IBAN %s for country %s', (iban, countryCode) => {
    expect(isIBAN(iban, { countryCode })).toBeTruthy();
  });

  it.each([
    ['DE22500105170648489890', 'DE'],
    ['DE1250010517064848989', 'DE'],
    ['LU761111000872960001', 'LU'],
  ])('should not validate IBAN %s for country %s', (iban, countryCode) => {
    expect(isIBAN(iban, { countryCode })).toBeFalsy();
  });
});
