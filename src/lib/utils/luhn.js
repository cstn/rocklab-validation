/**
 * @fileOverview luhn checksum
 */

const checkLuhn = value => {
  const checksum = {
    odd: 0,
    even: 0,
  };

  // calc checksum on reverse list of digits
  value
    .split('')
    .reverse()
    .reduce((acc, char, index) => {
      const digit = parseInt(char, 10);

      if (index % 2 === 0) {
        // sum odd
        acc.odd += digit;
      } else if (digit >= 5) {
        // sum last digit of double even
        acc.even = acc.even + 2 * digit - 9;
      } else {
        acc.even += 2 * digit;
      }

      return acc;
    }, checksum);

  // check mod10
  return (checksum.odd + checksum.even) % 10 === 0;
};

export default checkLuhn;
