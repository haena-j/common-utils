# ts-common-utils

This project includes several utility functions that can be useful for JavaScript and TypeScript development.

## Available Functions

### Object Utility Functions

1. **deepEqual(a, b)** - Checks the deep equality of two objects.
2. **mergeUniqueObjects(baseObjects, newObjects)** - Merges two arrays of objects and removes duplicates.

### Cookie Utility Functions

1. **getCookie(name)** - Retrieves the value of a specific cookie.
2. **setCookie(name, value, option)** - Sets a new cookie with a name, value, and optional settings.

### Number Utility Functions

1. **roundToDecimalPlace(value, decimalPlace, asString)** - Rounds a number to a specific number of decimal places. Optionally returns the result as a string.
2. **extractNumber(value)** - Removes non-digit and non-period characters from a string.
3. **commaize(value)** - Adds a comma every three digits in a number or string.
4. **unCommaize(value)** - Removes all commas from a string.

### Random Utility Functions

1. **getRandomID()** - Generates a random, unique ID using a combination of `Math.random()` and `Date.now()`.
2. **getRandomKey(length)** - Generates a random alphanumeric string of a specified length. Defaults to a length of 10 if no length is provided.
3. **getRandomCharactor()** - Generates a random character from a set of alphanumeric characters.
4. **getRandomBoolean()** - Generates a random boolean value (true or false).

### File Utility Functions

1. **getExtension(filename)** - Extract the extension from a file name.

## Text Utility Functions

1. **toTitleCase(str)** - Converts a string to title case.
2. **truncate(str, length)** - Truncates a string to a specific length and appends an ellipsis ('...') if the original string is longer.
3. **reverseText(str)** - Reverses the order of characters in a string.
4. **removeAllSpaces(str)** - Removes all spaces from a string.
5. **decodeHTMLEntities(str)** - Converts HTML entities to their corresponding characters in a string. Returns an empty string if the input is `null` or `undefined`.
6. **encodeHTMLEntities(originalText)** - Converts special characters (&, <, >, ", ') to their corresponding HTML entities in a string. Returns an empty string if the input is `null` or `undefined`.

## Installation

In the project directory, run:

```bash
npm install
```

## Testing

In the project directory, run:

```bash
npm run test
```

This will execute test cases for all utility functions.
