// Optional string type for better type safety
type MaybeString = string | null | undefined;

// Convert a string to title case
const toTitleCase = (str: string): string => {
  return str.replace(
    /\w\S*/g,
    (txt: string) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

// Truncate a string to a specific length and append an ellipsis
const truncate = (str: string, length: number): string => {
  return str.length > length ? str.substring(0, length - 3) + '...' : str;
};

const reverseText = (str: string): string => {
  return str.split('').reverse().join('');
};

// Remove all spaces
const removeAllSpaces = (str: string): string => {
  return str.replace(/\s/g, '');
};

// Convert HTML entities to their corresponding characters
const decodeHTMLEntities = (str: MaybeString): string => {
  if (!str) {
    return '';
  }

  return str
    .replace(/(&amp;|&#(0?)38;)/g, '&')
    .replace(/(&lt;|&#(0?)60;)/g, '<')
    .replace(/(&gt;|&#(0?)62;)/g, '>')
    .replace(/(&quot;|&#(0?)34;)/g, '"')
    .replace(/(&#(0?)39;)/g, `'`);
};

// Convert special characters to HTML entities to prevent security issues
const encodeHTMLEntities = (originalText: MaybeString): string => {
  if (!originalText) {
    return '';
  }

  return originalText
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

export default {
  toTitleCase,
  truncate,
  reverseText,
  removeAllSpaces,
  decodeHTMLEntities,
  encodeHTMLEntities,
};
