import { AppRouterProps } from '@/app/router';
import { COINS_CHILDREN_PATH } from '../../constants';
import { RegionsHomePage } from './regions-home-page';

export const REGIONS_HOME_PAGE_ROUTE_CONFIG: AppRouterProps = {
  component: RegionsHomePage,
  exact: true,
  path: COINS_CHILDREN_PATH.REGIONS,
};