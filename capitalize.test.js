const capitalize = require('./capitalize.js');

test('only first letter to be upper case.', () => {
  expect(capitalize('car')).toBe('Car');
});