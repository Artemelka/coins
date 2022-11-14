import { createSelector } from 'reselect';
import { ROUTER_REDUCER_KEY } from './constants';
import { RouterStore, AppRouterState } from './types';

const routerSelector = (state: RouterStore): AppRouterState => state[ROUTER_REDUCER_KEY];

export const routerLocationSelector = createSelector(
  routerSelector,
  (router): AppRouterState['location'] => router.location
);

export const locationPathNameSelector = createSelector(
  routerLocationSelector,
  (location): string => location.pathname
);

export const locationQuerySelector = createSelector(
  routerLocationSelector,
  (location): Record<string, string> => location.query
);