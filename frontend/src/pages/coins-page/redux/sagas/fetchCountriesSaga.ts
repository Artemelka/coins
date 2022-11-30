import { call, put, take, fork } from 'redux-saga/effects';
import { Api, CountriesGetResponse } from '@/api';
import { COUNTRIES_FETCH_SAGA, setCountriesLoadingSuccess } from '../actions';

function* fetchCountriesSagaWorker() {
    try {
        const response: CountriesGetResponse = yield call(Api.Countries.get);

        if (response.isError) {
            console.log('=== ERROR in fetchCountriesSagaWorker ===', response.errorMessage);
            return;
        }

        yield put(setCountriesLoadingSuccess(response.data.countries));
    } catch (error) {
        console.log('=== ERROR in fetchCountriesSagaWorker ===', error);
    }
}

export function* fetchCountriesSagaWatcher() {
    while (true) {
        yield take(COUNTRIES_FETCH_SAGA);
        yield fork(fetchCountriesSagaWorker);
    }
}