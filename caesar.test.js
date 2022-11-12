const caesar = require('./caesar.js');

test('allo,1 = bmpp', () => {
    expect(caesar('allo', 1)).toBe('bmmp')
});
test('zazz,2 = bcbb', () => {
    expect(caesar('zazz', 2)).toBe('bcbb')
});
test('defend the east wall of the castle,1 = efgfoe uif fbtu xbmm pg uif dbtumf', () => {
    expect(caesar('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
});