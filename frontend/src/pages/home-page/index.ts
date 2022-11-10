import { AppRouterProps } from '@/app/router';
import { HomePage } from './home-page';

export const HOME_PAGE_ROUTE_CONFIG: AppRouterProps = {
    component: HomePage,
    exact: true,
    path: '/',
};