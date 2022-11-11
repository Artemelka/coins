import { combineReducers } from '@reduxjs/toolkit';
import { REGION_REDUCER_CONFIG } from '@/pages';
import { routerReducer } from '../router';
import { APP_STORE_KEYS } from '../constants';

export const appReducer =  combineReducers({
  [APP_STORE_KEYS.ROUTER]: routerReducer,
  [REGION_REDUCER_CONFIG.name]: REGION_REDUCER_CONFIG.reducer,
});