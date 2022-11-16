import { AppTheme } from './app-theme';

function createTestService(params, skipInit) {
    const body = document.createElement("body");
    const services = new AppTheme({ ...params, element: body });

    if (!skipInit) {
        services.init();
    }

    return { services, body };
}

describe('AppTheme', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    describe('change method', () => {
        test('should be called LocalStorage.setItem', () => {
            createTestService({
                defaultTheme: 'testTheme',
                lsKey: 'testKey'
            });

            expect(localStorage.setItem).toHaveBeenCalledWith('testKey', 'testTheme');
        });

        test('should be call setAttribute on element', () => {
            const { body, services } = createTestService({}, true);
            const testMock = jest.fn();
            body.setAttribute = testMock;

            services.init();

            expect(testMock).toHaveBeenCalledWith('theme', 'light');
        });
    });

    describe('init method', () => {
        test('should be setup theme attr on the element with default value', () => {
            const { body } = createTestService();

            expect(body.getAttribute('theme')).toBe('light');
        });

        test('should be setup custom theme attr and value', () => {
            const { body } = createTestService({
                defaultTheme: 'testTheme',
                dataAttr: 'testAttr',
                lsKey: 'testKey'
            });

            expect(body.getAttribute('testAttr')).toBe('testTheme');
        });
    });

    describe('get method', () => {
        test('should be called LocalStorage.getItem', () => {
            const { services } = createTestService({ defaultTheme: 'test' });

            const testThemeName = services.get();

            expect(localStorage.getItem).toHaveBeenCalledWith('themeName');
            expect(testThemeName).toBe('test');
        });
    });
})