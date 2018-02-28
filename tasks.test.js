const fibonacciSimple = require('./tasks').fibonacciSimple;
const rle = require('./tasks').rle;
const getMinMax = require('./tasks').getMinMax;
const printNumbers = require('./tasks').printNumbers;
const fibonacciWithCache = require('./tasks').fibonacciWithCache;

describe('getMinMax', () => {
    test('\'Мистер X живет в доме 5 в квартире 321 на улице У, где температура -20.\' -> { max: 321, min: -20 }', () => {
        const string = "Мистер X живет в доме 5 в квартире 321 на улице У, где температура -20.";
        expect(getMinMax(string)).toEqual({ max: 321, min: -20 });
    });
    
    test('\'3. ыщвашитв +6 ват -.7 вмро +08 -10 15 & -1028\' -> { max: 8, min: -10 }', () => {
        const string = "3. ыщвашитв +6 ват -.7 вмро +08 -10";
        expect(getMinMax(string)).toEqual({ max: 8, min: -10 });
    });
    
    test('\'1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028\' -> { min: -1028, max: 15 }', () => {
        expect(getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028')).toEqual({ min: -1028, max: 15 });
    });

    test('\'1.32 32.2 .3 123 13.0001\' -> {min: 0.3, max: 123}', () => {
        expect(getMinMax('1.32 32.2 .3 123 13.0001')).toEqual({min: 0.3, max: 123});
    });

    test('\'\' -> {min: NaN, max: NaN}', () => {
        expect(getMinMax('')).toEqual({min: NaN, max: NaN});
    });

    test('\'1\' -> {min: 1, max: 1}', () => {
        expect(getMinMax('1')).toEqual({min: 1, max: 1});
    });
});

const data = Array.from({ length: 21 }, (v, k) => k-10);
const expected = [-55,34,-21,13,-8,5,-3,2,-1,1,0,1,1,2,3,5,8,13,21,34,55];

describe('fibonacciSimple', () => {
    
    test('Числа от -10 до 10', () => {
        const result = data.map(fibonacciSimple);
        expect(result).toEqual(expected);
    });

    test('11 -> 89', () => {
        expect(fibonacciSimple(11)).toBe(89);
    });

    test('20 -> 6765', () => {
        expect(fibonacciSimple(20)).toBe(6765);
    });
    
});

describe('fibonacciWithCache', () => {
    
    test('Числа от -10 до 10', () => {
        const result = data.map(fibonacciWithCache);
        expect(result).toEqual(expected);
    });

    test('11 -> 89', () => {
        expect(fibonacciWithCache(11)).toBe(89);
    });

    test('20 -> 6765', () => {
        expect(fibonacciWithCache(20)).toBe(6765);
    });

});

describe('RLE', () => {
    test('Пустая строка', () => {
        expect(rle('')).toBe('');
    });

    test('AAAB -> A3B', () => {
        expect(rle('AAAB')).toBe('A3B');
    });

    test('BCCDDDEEEE -> BC2D3E4', () => {
        expect(rle('BCCDDDEEEE')).toBe('BC2D3E4');
    });

    test('FFFFAAASASUENZFEWFFFFFF -> F4A3SASUENZFEWF6', () => {
        expect(rle('FFFFAAASASUENZFEWFFFFFF')).toBe('F4A3SASUENZFEWF6');
    });
});


describe('printNumbers', () => {
    test('Одна колонка', () => {
        expect(printNumbers(10, 1)).toBe(' 0\n 1\n 2\n 3\n 4\n 5\n 6\n 7\n 8\n 9\n10');
    });
    test('Чисел меньше колонок', () => {
        expect(printNumbers(4, 5)).toBe(' 0  1  2  3  4');
    });
    test('11, 3 -> 12 numbers in matrix with max column and min rows', () => {
        expect(printNumbers(11, 3)).toMatch(' 0  4  8\n' +
                                            ' 1  5  9\n' +
                                            ' 2  6 10\n' +
                                            ' 3  7 11');
    });
});
