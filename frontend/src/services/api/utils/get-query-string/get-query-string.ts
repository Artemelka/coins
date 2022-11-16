import { QueryParams } from '../../types';

export function getQueryString(params: QueryParams): string {
    if (!params) {
        return '';
    }

    return Object.entries(params).reduce((str, [key, value]) => {
        const param = `${key}=${value}`;

        return str ? `${str}&${param}` : `?${param}`;
    }, '');
}