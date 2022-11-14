import { AppRouterProps } from '@/app/router';
import { COINS_PAGE_ROUTE_CONFIG } from './coins-page';

export { COINS_REDUCER_CONFIG, COINS_PAGE_SAGAS } from './coins-page';
export type { CoinsStore } from './coins-page';

export const PAGES_ROUTES_CONFIG: Array<AppRouterProps> = [
    COINS_PAGE_ROUTE_CONFIG,
];