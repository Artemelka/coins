import { Action } from 'redux';
import { BaseAction } from '@/app';
import { Region  } from './types';

export const REGIONS_LOADING_START = 'REGIONS_LOADING_START';
type RegionsLoadingStart = Action<typeof REGIONS_LOADING_START>;
export const setRegionsLoadingStart = (): RegionsLoadingStart => ({ type: REGIONS_LOADING_START });

export const REGIONS_LOADING_STOP = 'REGIONS_LOADING_STOP';
type RegionsLoadingStop = Action<typeof REGIONS_LOADING_STOP>;
export const setRegionsLoadingStop = (): RegionsLoadingStop => ({ type: REGIONS_LOADING_STOP });

export const REGIONS_LOADING_SUCCESS = 'REGIONS_LOADING_SUCCESS';
type RegionsLoadingSuccess = BaseAction<typeof REGIONS_LOADING_SUCCESS, { regions: Region[] }>;
export const setRegionsLoadingSuccess = (regions: Region[]): RegionsLoadingSuccess => ({
    type: REGIONS_LOADING_SUCCESS,
    payload: { regions },
});

export const REGIONS_FETCH_SAGA = 'REGIONS_FETCH_SAGA';
type RegionsFetch = Action<typeof REGIONS_FETCH_SAGA>;
export const fetchRegionsSagaAction = (): RegionsFetch => ({ type: REGIONS_FETCH_SAGA });

export type RegionsActions = RegionsLoadingStart | RegionsLoadingStop | RegionsLoadingSuccess;