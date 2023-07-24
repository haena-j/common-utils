import number from '.';

describe('number utils', () => {
  describe('roundToDecimalPlace', () => {
    it('should correctly round a number to 2 decimal places by default', () => {
      expect(number.roundToDecimalPlace(123.456)).toEqual(123.46);
    });

    it('should correctly round a number to a given decimal place', () => {
      expect(number.roundToDecimalPlace(123.456, 1)).toEqual(123.5);
    });

    test('should return a string when asString is true', () => {
      const result = number.roundToDecimalPlace(123.456, 2, true);
      expect(typeof result).toBe('string');
      expect(result).toBe('123.46');
    });

    test('should return a number when asString is false', () => {
      const result = number.roundToDecimalPlace(123.456, 2, false);
      expect(typeof result).toBe('number');
      expect(result).toBe(123.46);
    });

    it('should throw an error if the decimal place is not between 0 and 20', () => {
      expect(() => number.roundToDecimalPlace(123.456, 21)).toThrowError();
    });
  });

  describe('extractNumber', () => {
    it('should correctly extract number from a string', () => {
      expect(number.extractNumber('42.59$')).toEqual('42.59');
    });
  });

  describe('commaize', () => {
    test('should properly commaize an integer number', () => {
      expect(number.commaize(1234567)).toBe('1,234,567');
    });
  
    test('should properly commaize a number without decimal part', () => {
      expect(number.commaize('1234567')).toBe('1,234,567');
    });
  
    test('should properly commaize a number with decimal part', () => {
      expect(number.commaize('1234567.89')).toBe('1,234,567.89');
    });
  });

  describe('unCommaize', () => {
    it('should correctly remove commas from a string', () => {
      expect(number.unCommaize('1,234,567')).toEqual('1234567');
    });
  });
});
