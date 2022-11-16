import  { Api } from './api';

const BASE_URL = 'https://manifity-coins-default-rtdb.firebaseio.com';

export const ApiRequest = new Api({
    url: BASE_URL,
});

export type { ApiResponse } from './types';