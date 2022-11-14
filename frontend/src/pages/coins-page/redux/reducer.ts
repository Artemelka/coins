import {
    REGIONS_LOADING_STOP,
    REGIONS_LOADING_START,
    REGIONS_LOADING_SUCCESS,
    COUNTRIES_LOADING_SUCCESS,
    RegionsActions,
} from './actions';
import { CoinsState } from './types';

const INITIAL_STATE: CoinsState = {
    isLoading: true,
    regions: [],
    countries: [],
}

export function coinsReducer(state: CoinsState = INITIAL_STATE, action: RegionsActions) {
    switch (action.type) {
        case REGIONS_LOADING_STOP:
            return {
                ...state,
                isLoading: false,
            };

        case REGIONS_LOADING_START:
            return {
                ...state,
                isLoading: true,
            };

        case REGIONS_LOADING_SUCCESS:
            return {
                ...state,
                regions: action.payload.regions,
            };

        case COUNTRIES_LOADING_SUCCESS:
            return {
                ...state,
                countries: action.payload.countries,
            };

        default:
            return state;
    }
}