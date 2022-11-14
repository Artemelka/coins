import { createSelector } from 'reselect';
import { AppStore } from '@/app';
import { locationQuerySelector } from '@/app/router';
import { COINS_REDUCER_NAME } from './constants';
import { CoinsState, Region, Country } from './types';

const coinsSelector = (state: AppStore): CoinsState => state[COINS_REDUCER_NAME];

export const regionsIsLoadingSelector = createSelector<AppStore, CoinsState, Boolean>(
    [coinsSelector],
    ({ isLoading }) => isLoading
);

export const regionsItemsSelector = createSelector<AppStore, CoinsState, Array<Region>>(
    [coinsSelector],
    ({ regions }) => regions
);

export const countriesSelector = createSelector<AppStore, CoinsState, Array<Country>>(
    [coinsSelector],
    ({ countries }) => countries
);

export const activeRegionCountrySelector = createSelector(
  [countriesSelector, locationQuerySelector],
  (countries, { id }) => {
    return countries.filter(({ regionId }) => regionId === Number(id))
  }
);