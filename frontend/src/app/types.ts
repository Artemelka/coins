import { Action } from 'redux';
import { RouterStore } from '@/app/router';
import { RegionsStore } from '@/pages';

export type AppStore = RouterStore & RegionsStore;

export type BaseAction<T, P> = Action<T> & {
  payload: P;
};