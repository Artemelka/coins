import { createSelector } from 'reselect';
import { AppStore } from '@/app';
import { REGIONS_REDUCER_NAME } from './constants';
import { RegionsState, Region } from './types';

type AppStateWithRegions = AppStore & { [REGIONS_REDUCER_NAME]: RegionsState};

const regionsSelector = (state: AppStateWithRegions): RegionsState => state[REGIONS_REDUCER_NAME];

export const regionsIsLoadingSelector = createSelector<AppStateWithRegions, RegionsState, Boolean>(
    [regionsSelector],
    ({ isLoading }) => isLoading
);

export const regionsItemsSelector = createSelector<AppStateWithRegions, RegionsState, Region[]>(
    [regionsSelector],
    ({ items }) => items
);