import {
    REGIONS_LOADING_STOP,
    REGIONS_LOADING_START,
    REGIONS_LOADING_SUCCESS,
    RegionsActions,
} from './actions';
import { RegionsState } from './types';

const INITIAL_STATE: RegionsState = {
    isLoading: true,
    items: [],
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

        default:
            return state;
    }
}