import { AppRouterProps } from '@/app/router';
import { RegionsPage } from './regions-page';
import { regionsReducer, REGIONS_REDUCER_NAME } from './redux';
import { fetchRegionsSagaWatcher, fetchCountriesSagaWatcher } from './redux';

export type { RegionsStore } from './redux';
export const REGIONS_PAGE_ROUTE_CONFIG: AppRouterProps = {
    component: RegionsPage,
    exact: true,
    path: '/',
};

export const REGION_REDUCER_CONFIG = {
    reducer: regionsReducer,
    name: REGIONS_REDUCER_NAME,
}

export const REGIONS_PAGE_SAGAS = [
    fetchRegionsSagaWatcher,
    fetchCountriesSagaWatcher,
];