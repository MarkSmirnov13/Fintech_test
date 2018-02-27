const fibonacciSimple = require('./tasks').fibonacciSimple;
const rle = require('./tasks').rle;

test('fibonacciSimple. 0 -> 0', () => {
    expect(fibonacciSimple(0)).toBe(0);
});

test('fibonacciSimple. 1 -> 1', () => {
    expect(fibonacciSimple(1)).toBe(1);
});


test('fibonacciSimple. 11 -> 89', () => {
    expect(fibonacciSimple(11)).toBe(89);
});


test('fibonacciSimple. 20 -> 6765', () => {
    expect(fibonacciSimple(20)).toBe(6765);
});


test('fibonacciSimple. 2 -> 1', () => {
    expect(fibonacciSimple(2)).toBe(1);
});

test('RLE. Пустая строка', () => {
    expect(rle('')).toBe('');
});

test('RLE. AAAB -> A3B', () => {
    expect(rle('AAAB')).toBe('A3B');
});

test('RLE. BCCDDDEEEE -> BC2D3E4', () => {
    expect(rle('BCCDDDEEEE')).toBe('BC2D3E4');
});

test('RLE. FFFFAAASASUENZFEWFFFFFF -> F4A3SASUENZFEWF6', () => {
    expect(rle('FFFFAAASASUENZFEWFFFFFF')).toBe('F4A3SASUENZFEWF6');
});