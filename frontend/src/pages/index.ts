import { AppRouterProps } from '@/app/router';
import { REGIONS_PAGE_ROUTE_CONFIG } from './regions-page';

export { REGION_REDUCER_CONFIG, REGIONS_PAGE_SAGAS } from './regions-page';
export type { RegionsStore } from './regions-page';

export const PAGES_ROUTES_CONFIG: Array<AppRouterProps> = [
    REGIONS_PAGE_ROUTE_CONFIG,
];