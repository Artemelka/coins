import { Action } from 'redux';
import { RouterStore } from '@/app/router';
import { CoinsStore } from '@/pages';

export type AppStore = RouterStore & CoinsStore;

export type BaseAction<T, P> = Action<T> & {
  payload: P;
};