import { Action } from 'redux';
import { RouterStore } from '@/app/router';

export type AppStore = RouterStore;

export type BaseAction<P> = Action<string> & {
  payload: P;
};