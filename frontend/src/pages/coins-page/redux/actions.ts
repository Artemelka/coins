import { Action } from 'redux';
import { BaseAction } from '@/app';
import { Region, Country } from './types';

export const REGIONS_LOADING_START = 'REGIONS_LOADING_START';
type RegionsLoadingStart = Action<typeof REGIONS_LOADING_START>;
export const setRegionsLoadingStart = (): RegionsLoadingStart => ({ type: REGIONS_LOADING_START });

export const REGIONS_LOADING_STOP = 'REGIONS_LOADING_STOP';
type RegionsLoadingStop = Action<typeof REGIONS_LOADING_STOP>;
export const setRegionsLoadingStop = (): RegionsLoadingStop => ({ type: REGIONS_LOADING_STOP });

export const REGIONS_FETCH_SAGA = 'REGIONS_FETCH_SAGA';
type RegionsFetch = Action<typeof REGIONS_FETCH_SAGA>;
export const fetchRegionsSagaAction = (): RegionsFetch => ({ type: REGIONS_FETCH_SAGA });

export const REGIONS_LOADING_SUCCESS = 'REGIONS_LOADING_SUCCESS';
type RegionsLoadingSuccess = BaseAction<typeof REGIONS_LOADING_SUCCESS, { regions: Array<Region> }>;
export const setRegionsLoadingSuccess = (regions: Array<Region>): RegionsLoadingSuccess => ({
    type: REGIONS_LOADING_SUCCESS,
    payload: { regions },
});

// Countries

export const COUNTRIES_FETCH_SAGA = 'COUNTRIES_FETCH_SAGA';
type CountriesFetch = Action<typeof COUNTRIES_FETCH_SAGA>;
export const fetchCountriesSagaAction = (): CountriesFetch => ({ type: COUNTRIES_FETCH_SAGA });

export const COUNTRIES_LOADING_SUCCESS = 'COUNTRIES_LOADING_SUCCESS';
type CountriesLoadingSuccess = BaseAction<typeof COUNTRIES_LOADING_SUCCESS, { countries: Array<Country> }>;
export const setCountriesLoadingSuccess = (countries: Array<Country>): CountriesLoadingSuccess => ({
    type: COUNTRIES_LOADING_SUCCESS,
    payload: { countries },
});

export type RegionsActions = RegionsLoadingStart |
    RegionsLoadingStop |
    RegionsLoadingSuccess |
    CountriesLoadingSuccess;