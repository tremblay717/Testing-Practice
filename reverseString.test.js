const reverseString = require('./reverseString.js');

test('reverse string', () => {
  expect(reverseString('word')).toBe('drow');
});