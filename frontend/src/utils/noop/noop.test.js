import { noop } from './noop';

describe('noop', () => {
    test('should be called', () => {
        expect(noop()).toBe(undefined);
    })
});