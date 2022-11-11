import { createSelector } from 'reselect';
import { AppStore } from '@/app';
import { REGIONS_REDUCER_NAME } from './constants';
import { RegionsState, Region, Country } from './types';

const regionsSelector = (state: AppStore): RegionsState => state[REGIONS_REDUCER_NAME];

export const regionsIsLoadingSelector = createSelector<AppStore, RegionsState, Boolean>(
    [regionsSelector],
    ({ isLoading }) => isLoading
);

export const regionsItemsSelector = createSelector<AppStore, RegionsState, Array<Region>>(
    [regionsSelector],
    ({ items }) => items
);

export const countrySelector = createSelector<AppStore, RegionsState, Array<Country>>(
    [regionsSelector],
    ({ activeRegionId, countries }) => countries.filter(({ regionId }) => activeRegionId === regionId)
);

export const activeRegionIdSelector = createSelector<AppStore, RegionsState, number>(
    [regionsSelector],
    ({ activeRegionId }) => activeRegionId
);