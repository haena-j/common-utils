// Rounds a number to a specific number of decimal places.
// ex. (123.456, 2) => 123.46 or "123.46"
const roundToDecimalPlace = (
  value: number,
  decimalPlace: number = 2,
  asString: boolean = false
): number | string => {
  if (
    !Number.isInteger(decimalPlace) ||
    decimalPlace < 0 ||
    decimalPlace > 20
  ) {
    throw new RangeError('Decimal place must be an integer between 0 and 20.');
  }

  if (asString) {
    return value.toFixed(decimalPlace);
  }

  const decimalFactor = Math.pow(10, decimalPlace);
  return Math.round((value + Number.EPSILON) * decimalFactor) / decimalFactor;
};

// Removes non-digit, non-period characters from a string.
// ex. "42.59$" => "42.59"
const extractNumber = (value: string): string => {
  return value.replace(/[^.\d]/g, '');
};

// Adds a comma to every three digits in a number or string.
// ex. 1234567.89 => "1,234,567.89"
const commaize = (value: number | string): string => {
  const numberStr = extractNumber(String(value));
  const [integerPart, decimalPart] = numberStr.split('.');

  const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (decimalPart) {
    return `${integerWithCommas}.${decimalPart}`;
  }

  return integerWithCommas;
};

// Removes all commas from a string.
// ex. "1,234,567" => "1234567"
const unCommaize = (value: string): string => {
  return value.replace(/,/g, '');
};

/**
 * Adds dashes to the given phone number string based on its length.
 * ex. "01000000000" => "010-0000-0000"
 */
const addDashesToPhoneNumber = (input: string): string => {
  const digitsOnly = input.replace(/[^0-9]/g, '');

  if (digitsOnly.length < 9) {
    return digitsOnly;
  }

  const applyFormat = (pattern: number[], number: string) => {
    let startIdx = 0;
    return pattern
      .map((length) => {
        const segment = number.slice(startIdx, startIdx + length);
        startIdx += length;
        return segment;
      })
      .join('-');
  };

  switch (digitsOnly.length) {
    case 9:
      return applyFormat([2, 3, 4], digitsOnly);
    case 10:
      return applyFormat([3, 3, 4], digitsOnly);
    case 11:
      return applyFormat([3, 4, 4], digitsOnly);
    default:
      throw new Error('Invalid phone number length');
  }
};

/**
 * Adds a leading zero to a number if it is less than 10.
 * ex. 1 => "01"
 */
const addZero = (num: number | string): string => {
  return String(num).padStart(2, '0');
};

export default {
  roundToDecimalPlace,
  extractNumber,
  commaize,
  unCommaize,
  addDashesToPhoneNumber,
  addZero,
};
