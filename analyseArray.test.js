const analyseArray = require('./analyseArray.js');

test('[1,2,3]', () => {
    expect(analyseArray([1, 2, 3])).toEqual({
        sum: 6,
        minimum: 1,
        maximum: 3,
        average: 2,
        length: 3
    })
});