import textUtils from '.';

describe('Text Utilities', () => {
  test('toTitleCase', () => {
    expect(textUtils.toTitleCase('hello world')).toBe('Hello World');
  });

  test('truncate', () => {
    expect(textUtils.truncate('hello world', 5)).toBe('he...');
    expect(textUtils.truncate('hello', 10)).toBe('hello');
  });

  test('reverseText', () => {
    expect(textUtils.reverseText('hello')).toBe('olleh');
  });

  test('removeAllSpaces', () => {
    expect(textUtils.removeAllSpaces(' h e l lo ')).toBe('hello');
  });

  test('decodeHTMLEntities', () => {
    expect(textUtils.decodeHTMLEntities('&amp;&lt;&gt;&quot;&#39;')).toBe(
      '&<>"\''
    );
    expect(textUtils.decodeHTMLEntities(null)).toBe('');
    expect(textUtils.decodeHTMLEntities(undefined)).toBe('');
  });

  test('encodeHTMLEntities', () => {
    expect(textUtils.encodeHTMLEntities('&<>"\'')).toBe(
      '&amp;&lt;&gt;&quot;&#39;'
    );
    expect(textUtils.encodeHTMLEntities(null)).toBe('');
    expect(textUtils.encodeHTMLEntities(undefined)).toBe('');
  });
});
