import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { routerReducer } from '../router';
import { APP_STORE_KEYS } from '../constants';

// @ts-ignore
export const createReducer = (asyncReducers?: Record<string, Reducer>): Reducer => combineReducers({
  [APP_STORE_KEYS.ROUTER]: routerReducer,
  ...(asyncReducers ? asyncReducers : {})
});