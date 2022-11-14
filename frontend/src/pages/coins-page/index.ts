import { AppRouterProps } from '@/app/router';
import { CoinsPage } from './coins-page';
import { coinsReducer, COINS_REDUCER_NAME } from './redux';
import { fetchRegionsSagaWatcher, fetchCountriesSagaWatcher } from './redux';
import { COINS_PAGE_PATH } from './constants';

export type { CoinsStore } from './redux';
export const COINS_PAGE_ROUTE_CONFIG: AppRouterProps = {
    component: CoinsPage,
    path: COINS_PAGE_PATH,
};

export const COINS_REDUCER_CONFIG = {
    reducer: coinsReducer,
    name: COINS_REDUCER_NAME,
}

export const COINS_PAGE_SAGAS = [
    fetchRegionsSagaWatcher,
    fetchCountriesSagaWatcher,
];