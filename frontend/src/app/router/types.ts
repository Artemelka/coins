import { RouteProps } from 'react-router';
import { RouterState } from 'connected-react-router';

type AppLocation = RouterState['location'] & { query: Record<string, string> };

export interface AppRouterState extends RouterState {
  location: AppLocation
}

export type RouterStore = { router: AppRouterState };

export type AppRouterProps = Pick<RouteProps, 'component' | 'exact'> & {
  path: string;
};