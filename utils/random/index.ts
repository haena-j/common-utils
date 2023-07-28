// Generate a random ID using Math.random() and Date.now().
const getRandomID = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

// Generate a random character from a set of alphanumeric characters.
const getRandomCharactor = (): string => {
  const possibleCharacters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return possibleCharacters.charAt(
    Math.floor(Math.random() * possibleCharacters.length)
  );
};

// Generate a random alphanumeric string of a specified length.
const getRandomKey = (length: number = 10): string => {
  let key = '';

  for (let i = 0; i < length; i++) {
    key += getRandomCharactor();
  }

  return key;
};

// Generate a random boolean value.
const getRandomBoolean = (): boolean => {
  return Math.random() < 0.5;
};

export default {
  getRandomID,
  getRandomKey,
  getRandomCharactor,
  getRandomBoolean,
};
