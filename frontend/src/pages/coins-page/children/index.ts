import { AppRouterProps } from '@/app/router';
import { COUNTRIES_PAGE_ROUTE_CONFIG } from './countries-page';
import { REGIONS_HOME_PAGE_ROUTE_CONFIG } from './regions-home-page';

export const COINS_CHILDREN_PAGE_ROUTE_CONFIGS: Array<AppRouterProps> = [
  REGIONS_HOME_PAGE_ROUTE_CONFIG,
  COUNTRIES_PAGE_ROUTE_CONFIG
];