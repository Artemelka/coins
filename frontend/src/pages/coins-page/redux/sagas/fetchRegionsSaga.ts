import { call, put, take, fork } from 'redux-saga/effects';
import { Api, RegionsGetResponse } from '@/api';
import { REGIONS_FETCH_SAGA, setRegionsLoadingSuccess } from '../actions';

function* fetchRegionsSagaWorker() {
    try {
        const response: RegionsGetResponse = yield call(Api.Regions.get);

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