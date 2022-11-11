import { createSelector } from 'reselect';
import { AppStore } from '@/app';
import { REGIONS_REDUCER_NAME } from './constants';
import { RegionsState, Region } from './types';

const regionsSelector = (state: AppStore): RegionsState => state[REGIONS_REDUCER_NAME];

export const regionsIsLoadingSelector = createSelector<AppStore, RegionsState, Boolean>(
    [regionsSelector],
    ({ isLoading }) => isLoading
);

export const regionsItemsSelector = createSelector<AppStore, RegionsState, Region[]>(
    [regionsSelector],
    ({ items }) => items
);