import { AppRouterProps } from '@/app/router';
import { COINS_CHILDREN_PATH } from '../../constants';
import { CountriesPage } from './countries-page';

export const COUNTRIES_PAGE_ROUTE_CONFIG: AppRouterProps = {
    component: CountriesPage,
    exact: true,
    path: `${COINS_CHILDREN_PATH.COUNTRIES}`,
}