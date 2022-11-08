import { routerMiddleware } from 'connected-react-router';
import { history } from './history';

export const appRouterMiddleware = routerMiddleware(history);