import { AppRouterProps } from '@/app/router';
import { COINS_CHILDREN_PATH } from '../../constants';
import { RegionsPage } from './regions-page';

export const REGIONS_PAGE_ROUTE_CONFIG: AppRouterProps = {
  component: RegionsPage,
  exact: true,
  path: COINS_CHILDREN_PATH.REGIONS,
};