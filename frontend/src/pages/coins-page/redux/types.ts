import { COINS_REDUCER_NAME } from './constants';

export type Region = {
    active: boolean;
    id: number;
    imageUri: string;
    name: string;
};

export type Country = {
    active: boolean;
    name: string;
    description: string;
    id: number;
    imageUri: string;
    regionId: number;
};

export type CoinsState = {
    isLoading: boolean;
    regions: Array<Region>;
    countries: Array<Country>;
}

export type CoinsStore = { [COINS_REDUCER_NAME]: CoinsState};