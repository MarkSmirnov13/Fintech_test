const fibonacciSimple = require('./main');

test('check if 8 number of Fibonacci is 21', () => {
    expect(fibonacciSimple(8)).toBe(21);
});
