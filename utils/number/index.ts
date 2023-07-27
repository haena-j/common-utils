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

export default {
  roundToDecimalPlace,
  extractNumber,
  commaize,
  unCommaize,
};
