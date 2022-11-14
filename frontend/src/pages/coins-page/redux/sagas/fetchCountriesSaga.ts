import { call, put, take, fork } from 'redux-saga/effects';
import { ApiRequest, ApiResponse } from '@/services/api';
import { COUNTRIES_FETCH_SAGA, setCountriesLoadingSuccess } from '../actions';
import { Country } from '../types';

type ResponseCountries = Omit<Country, 'imageUri' | 'name'> & {
    imageUrl: string;
    countryName: string;
};

type Response = ApiResponse<{ countries: Array<ResponseCountries> }>;

function* fetchCountriesSagaWorker() {
    try {
        const response: Response = yield call(ApiRequest.get, 'countries.json');

        if (response.isError) {
            console.log('=== ERROR in fetchCountriesSagaWorker ===', response.errorMessage);
            return;
        }

        const countries = response.data.countries.map(({ imageUrl, countryName, ...rest}) => ({
            ...rest,
            imageUri: imageUrl,
            name: countryName,
        }));

        yield put(setCountriesLoadingSuccess(countries));
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