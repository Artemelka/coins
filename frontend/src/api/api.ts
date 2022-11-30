// import { ApiService } from '@/services/api';
import { MockApi } from './mock';

const BASE_URL = 'https://manifity-coins-default-rtdb.firebaseio.com';

// export const Api = new ApiService({
//   url: BASE_URL,
// });

export const Api = new MockApi({
  url: BASE_URL,
});