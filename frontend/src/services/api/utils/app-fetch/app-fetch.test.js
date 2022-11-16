import { appFetch } from './app-fetch';
import { METHOD, BASE_PARAMS } from '../../constants';

describe('appFetch', () => {
    const TEST_RESPONSE = {
        isError: false,
        errorMessage: '',
        data: { test: 'test' },
    };
    const emptyResponse = () => Promise.resolve({ json: () => Promise.resolve(null) });
    const errorResponse = () => Promise.reject({ message: 'test request error' });
    const resolvedResponse = () => Promise.resolve({ json: () => Promise.resolve(TEST_RESPONSE.data) });

    const unMockedFetch = global.fetch;

    beforeAll(() => { global.fetch = () => Promise.resolve({ json: () => Promise.resolve([]) }) });
    afterAll(() => { global.fetch = unMockedFetch });

    const TEST_URL = 'testUrl';

    test('should be call with correct params', async () => {
        const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(emptyResponse);
        const expectedResult = {
            ...BASE_PARAMS,
            body: JSON.stringify(TEST_RESPONSE.data),
            method: METHOD.POST,
        };

        await appFetch(TEST_URL, { method: METHOD.POST, body: JSON.stringify(TEST_RESPONSE.data) });

        expect(fetchMock).toHaveBeenCalledWith(TEST_URL, expectedResult);
    });

    test('should return correct response format', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(resolvedResponse);

        const response = await appFetch(TEST_URL, { method: METHOD.GET });

        expect(response).toEqual(TEST_RESPONSE);
    });

    test('should return correct error response if result empty', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(emptyResponse);

        const expectedResult = {
            isError: true,
            errorMessage: `Api request: "${TEST_URL}" return empty data`,
            data: {},
        };

        const result = await appFetch(TEST_URL, { method: METHOD.GET });

        expect(result).toEqual(expectedResult);
    });

    test('should return correct error response if request failed', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(errorResponse);

        const expectedResult = {
            isError: true,
            errorMessage: 'test request error',
            data: {},
        };

        const result = await appFetch(TEST_URL, { method: METHOD.GET });

        expect(result).toEqual(expectedResult);
    });
});