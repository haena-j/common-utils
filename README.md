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
