import { Api } from './api';
import { appFetch } from './utils';
import { METHOD } from './constants';

jest.mock('./utils', () => ({
    ...jest.requireActual('./utils'),
    appFetch: jest.fn(),
}));

describe('Api', () => {
    const testUrl = 'test.url';
    const testApi = new Api({ url: testUrl });
    const testSuffix = 'testSuffix';
    const expectedGetMethod = { method: METHOD.GET };
    const expectedUrl = `${testUrl}/${testSuffix}`;

    test('should be call appFetch with correct url and method', async () => {
        await testApi.get(testSuffix);

        expect(appFetch).toHaveBeenCalledWith(expectedUrl, expectedGetMethod);
    });

    test('method get should be add queryParams', async () => {
        await testApi.get(testSuffix, { testKey: 'testValue' });

        expect(appFetch).toHaveBeenCalledWith(`${expectedUrl}?testKey=testValue`, expectedGetMethod);
    });

    test('method post should be add json body', async () => {
        const testBody = { data: 'test' };
        const expectedParams = {
            body: JSON.stringify(testBody),
            method: METHOD.POST,
        };
        await testApi.post(testSuffix, testBody);

        expect(appFetch).toHaveBeenCalledWith(expectedUrl, expectedParams);
    })
});