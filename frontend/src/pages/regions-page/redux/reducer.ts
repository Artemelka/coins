import {
    REGIONS_LOADING_STOP,
    REGIONS_LOADING_START,
    REGIONS_LOADING_SUCCESS,
    COUNTRIES_LOADING_SUCCESS,
    SET_ACTIVE_REGION_ID,
    RegionsActions,
} from './actions';
import { RegionsState } from './types';

const INITIAL_STATE: RegionsState = {
    isLoading: true,
    items: [],
    countries: [],
    activeRegionId: NaN,
}

export function regionsReducer(state: RegionsState = INITIAL_STATE, action: RegionsActions) {
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
                items: action.payload.regions,
            };

        case COUNTRIES_LOADING_SUCCESS:
            return {
                ...state,
                countries: action.payload.countries,
            };

        case SET_ACTIVE_REGION_ID:
            return {
                ...state,
                activeRegionId: action.payload.id,
            }

        default:
            return state;
    }
}