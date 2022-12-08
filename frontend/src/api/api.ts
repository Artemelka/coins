import { ApiService } from '@/services/api';

const BASE_URL = '/api/mock'  //'https://manifity-coins-default-rtdb.firebaseio.com';

export const Api = new ApiService({
  url: BASE_URL,
});