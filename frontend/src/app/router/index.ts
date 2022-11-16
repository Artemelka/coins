import { ROUTER_REDUCER_KEY } from './constants';
import { routerReducer } from './reducer';

export { Route } from 'react-router';
export {
  AppRouterProvider,
  AppRouterSwitch,
} from './_components';
export { appRouterMiddleware } from './middleware';
export * from './selectors';
export const ROUTER_REDUCER_CONFIG = {
  reducer: routerReducer,
  name: ROUTER_REDUCER_KEY,
}

export type { AppRouterProps, RouterStore } from './types';