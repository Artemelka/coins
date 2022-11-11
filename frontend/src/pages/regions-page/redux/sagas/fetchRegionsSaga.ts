import { call, put, take, fork } from 'redux-saga/effects';
import { ApiRequest, ApiResponse } from '@/services/api';
import { REGIONS_FETCH_SAGA, setRegionsLoadingSuccess } from '../actions';
import { Region } from '../types';

function* fetchRegionsSagaWorker() {
    try {
        const response: ApiResponse<{ regions: Array<Region>}> = yield call(ApiRequest.get, 'regions.json');

        if (response.isError) {
            console.log('=== ERROR in fetchRegionsSagaWorker ===', response.errorMessage);
            return;
        }

        yield put(setRegionsLoadingSuccess(response.data.regions));
    } catch (error) {
        console.log('=== ERROR in fetchRegionsSagaWorker ===', error);
    }
}

export function* fetchRegionsSagaWatcher() {
    while (true) {
        yield take(REGIONS_FETCH_SAGA);
        yield fork(fetchRegionsSagaWorker);
    }
}