import React from 'react';
import { shallow } from 'enzyme';
import { AppLayoutComponent } from './app-layout';
import { AppRouterSwitch, Route } from '@/app/router';
import { PAGES_ROUTES_CONFIG } from '@/pages';

describe('AppLayoutComponent', () => {
    test('render', () => {
        const component = shallow(<AppLayoutComponent routes={PAGES_ROUTES_CONFIG}/>);

        expect(component).toMatchSnapshot();
    });

    test('tag header should be', () => {
        const component = shallow(<AppLayoutComponent routes={PAGES_ROUTES_CONFIG}/>);

        expect(component.find('.header').type()).toBe('header');
    });

    test('tag main should be', () => {
        const component = shallow(<AppLayoutComponent routes={PAGES_ROUTES_CONFIG}/>);

        expect(component.find('.main').type()).toBe('main');
    });

    test('AppRouterSwitch should have correct pathToRedirect', () => {
        const component = shallow(<AppLayoutComponent routes={PAGES_ROUTES_CONFIG}/>);

        expect(component.find(AppRouterSwitch).props().pathToRedirect).toBe(PAGES_ROUTES_CONFIG[0].path);
    });

    test('first Route should have correct path', () => {
        const component = shallow(<AppLayoutComponent routes={PAGES_ROUTES_CONFIG}/>);

        expect(component.find(Route).get(0).props.path).toBe(PAGES_ROUTES_CONFIG[0].path);
    });
});