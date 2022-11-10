import { AppRouterProps } from '@/app/router';
import { RegionsPage } from './regions-page';

export const REGIONS_PAGE_ROUTE_CONFIG: AppRouterProps = {
    component: RegionsPage,
    exact: true,
    path: '/',
};