import { COINS_REDUCER_NAME } from './constants';
import type { Region, Country } from '@/api';

export type CoinsState = {
    isLoading: boolean;
    regions: Array<Region>;
    countries: Array<Country>;
}

export type CoinsStore = { [COINS_REDUCER_NAME]: CoinsState };