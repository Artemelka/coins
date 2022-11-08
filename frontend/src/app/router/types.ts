import { RouteProps } from 'react-router';
import { RouterState } from "connected-react-router";

export type RouterStore = { router: RouterState };

export type AppRouterProps = Pick<RouteProps, 'component' | 'exact'> & {
  path: string;
};