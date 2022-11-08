import { createSelector } from 'reselect';
import { RouterState } from 'connected-react-router';
import { Location } from 'history';
import { ROUTER_REDUCER_KEY } from './constants';
import { RouterStore } from './types';

const routerSelector = (state: RouterStore): RouterState => state[ROUTER_REDUCER_KEY];

export const routerLocationSelector = createSelector(
  routerSelector,
  (router): Location => router.location
);
export const locationPathNameSelector = createSelector(
  routerLocationSelector,
  (location): string => location.pathname
);