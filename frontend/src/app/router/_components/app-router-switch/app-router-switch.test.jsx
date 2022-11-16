import React from 'react';
import { Redirect } from 'react-router';
import { shallow } from 'enzyme';
import { AppRouterSwitchComponent } from './app-router-switch';

const getComponent = (props) => (
    <AppRouterSwitchComponent {...props}>
        <div>mock children</div>
    </AppRouterSwitchComponent>
);

const NotFoundPageComponent = () => <div>notFoundPageComponent</div>;

const pathToRedirect = 'test';

describe('AppRouterSwitchComponent', () => {
    describe('render', () => {
        test('empty', () => {
            const component = shallow(<AppRouterSwitchComponent/>);

            expect(component).toMatchSnapshot();
        });

        test('only children', () => {
            const component = shallow(getComponent());

            expect(component).toMatchSnapshot();
        });

        test('with redirect', () => {
            const component = shallow(getComponent({ pathToRedirect }));

            expect(component).toMatchSnapshot();
        });

        test('with notFoundPageComponent', () => {
            const component = shallow(getComponent({ notFoundPageComponent: NotFoundPageComponent }));

            expect(component).toMatchSnapshot();
        });

        test('with notFoundPageComponent & redirect', () => {
            const component = shallow(getComponent({
                notFoundPageComponent: NotFoundPageComponent,
                pathToRedirect,
            }));

            expect(component).toMatchSnapshot();
        });
    });

    test('prop "pathToRedirect" should be equal Redirect prop "to"', () => {
        const component = shallow(getComponent({ pathToRedirect }));

        expect(component.find(Redirect).props().to).toBe(pathToRedirect);
    });

});