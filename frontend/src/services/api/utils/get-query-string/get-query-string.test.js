import { getQueryString } from './get-query-string';

describe('get-query-string', () => {
    test('should return empty string if params empty', () => {
        const result = getQueryString({});

        expect(result).toBe('');
    });

    test('should return empty string if called without params', () => {
        const result = getQueryString();

        expect(result).toBe('');
    });

    test('should return correct string if called with params', () => {
        const param1 = 'param1';
        const param2 = 'param2';
        const param3 = 123;
        const expectedResult = `?${param1}=${param1}&${param2}=${param2}&param3=${param3}`
        const result = getQueryString({ param1, param2, param3 });

        expect(result).toBe(expectedResult);
    });
});