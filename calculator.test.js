const calculator = require('./calculator.js');

test('calculation for each type of operation', () => {
    expect(calculator(6, 3)).toEqual({
        addition: 9,
        substraction: 3,
        multiplication: 18,
        division: 2
    });
});