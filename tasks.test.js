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
    
    test('getMinMax goes as expected', () => {
        expect(getMinMax).toThrow();
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
    
    test('fibonacciSimple goes as expected', () => {
        expect(fibonacciSimple).toThrow();
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
    test('fibonacciWithCache goes as expected', () => {
        expect(fibonacciWithCache).toThrow();
    });
});

describe('printNumbers', () =>{
    test('11, 3 -> 0  4  8\n' +
         '               1  5  9\n' +
         '               2  6 10\n' +
         '               3  7 11', () => {
        expect(printNumbers(11, 3)).toMatch(' 0  4  8\n' +
                                            ' 1  5  9\n' +
                                            ' 2  6 10\n' +
                                            ' 3  7 11');
    });
    test('printNumbers goes as expected', () => {
        expect(printNumbers).toThrow();
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
    
    test('rle goes as expected', () => {
        expect(rle).toThrow();
    });
});
