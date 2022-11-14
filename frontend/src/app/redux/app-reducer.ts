import { combineReducers } from '@reduxjs/toolkit';
import { COINS_REDUCER_CONFIG } from '@/pages';
import { routerReducer } from '../router';
import { APP_STORE_KEYS } from '../constants';

export const appReducer =  combineReducers({
  [APP_STORE_KEYS.ROUTER]: routerReducer,
  [COINS_REDUCER_CONFIG.name]: COINS_REDUCER_CONFIG.reducer,
});