// random/index.test.ts

import random from '../random';

describe('random utils', () => {
  describe('getRandomID', () => {
    it('should return a unique ID each time it is called', () => {
      const id1 = random.getRandomID();
      const id2 = random.getRandomID();
      expect(id1).not.toEqual(id2);
    });

    it('should return a string', () => {
      const id = random.getRandomID();
      expect(typeof id).toEqual('string');
    });
  });

  describe('getRandomKey', () => {
    it('should return a string of the correct length', () => {
      const length = 10;
      const key = random.getRandomKey(length);
      expect(key).toHaveLength(length);
    });

    it('should return a string of length 10 by default', () => {
      const key = random.getRandomKey();
      expect(key).toHaveLength(10);
    });
  });

  describe('getRandomCharactor', () => {
    it('should return a single character', () => {
      const char = random.getRandomCharactor();
      expect(char).toHaveLength(1);
    });

    it('should return a string', () => {
      const char = random.getRandomCharactor();
      expect(typeof char).toEqual('string');
    });
  });

  describe('getRandomBoolean', () => {
    it('should return a boolean', () => {
      const value = random.getRandomBoolean();
      expect(typeof value).toEqual('boolean');
    });
  });
});
