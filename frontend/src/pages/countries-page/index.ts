import { AppRouterProps } from '@/app/router';
import { CountriesPage } from './countries-page';

export const COUNTRIES_PAGE_ROUTE_CONFIG: AppRouterProps = {
    component: CountriesPage,
    exact: true,
    path: '/countries',
}