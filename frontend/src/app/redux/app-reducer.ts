import { combineReducers } from '@reduxjs/toolkit';
import { COINS_REDUCER_CONFIG } from '@/pages';
import { ROUTER_REDUCER_CONFIG } from '../router';

export const appReducer =  combineReducers({
  [ROUTER_REDUCER_CONFIG.name]: ROUTER_REDUCER_CONFIG.reducer,
  [COINS_REDUCER_CONFIG.name]: COINS_REDUCER_CONFIG.reducer,
});