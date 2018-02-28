const fibonacciSimple = require('./tasks').fibonacciSimple;
const rle = require('./tasks').rle;
const getMinMax = require('./tasks').getMinMax;
const printNumbers = require('./tasks').printNumbers;

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

    test('\'3e2 0x1000\' -> { min: 300, max: 4096 }', () => {
      expect(getMinMax('3e2 0x1000')).toEqual({ min: 300, max: 4096 });
    });
});

describe('fibonacciSimple', () => {
    test('0 -> 0', () => {
        expect(fibonacciSimple(0)).toBe(0);
    });

    test('1 -> 1', () => {
        expect(fibonacciSimple(1)).toBe(1);
    });

    test('11 -> 89', () => {
        expect(fibonacciSimple(11)).toBe(89);
    });

    test('20 -> 6765', () => {
        expect(fibonacciSimple(20)).toBe(6765);
    });

    test('2 -> 1', () => {
        expect(fibonacciSimple(2)).toBe(1);
    });
});

describe('fibonacciWithCache', () => {
    test('0 -> 0', () => {
        expect(fibonacciWithCache(0)).toBe(0);
    });

    test('1 -> 1', () => {
        expect(fibonacciWithCache(1)).toBe(1);
    });


    test('11 -> 89', () => {
        expect(fibonacciWithCache(11)).toBe(89);
    });


    test('20 -> 6765', () => {
        expect(fibonacciWithCache(20)).toBe(6765);
    });


    test('2 -> 1', () => {
        expect(fibonacciWithCache(2)).toBe(1);
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
