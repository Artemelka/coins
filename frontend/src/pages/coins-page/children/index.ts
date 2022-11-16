import { AppRouterProps } from '@/app/router';
import { COUNTRIES_PAGE_ROUTE_CONFIG } from './countries-page';
import { REGIONS_PAGE_ROUTE_CONFIG } from './regions-page';

export const COINS_CHILDREN_PAGE_ROUTE_CONFIGS: Array<AppRouterProps> = [
  REGIONS_PAGE_ROUTE_CONFIG,
  COUNTRIES_PAGE_ROUTE_CONFIG
];