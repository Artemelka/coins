import { appFetch, getQueryString } from './utils';
import { METHOD } from './constants';
import {
    AppRequestParams,
    ApiResponse,
} from './types';

type RequestParams = RequestInit & { method: keyof typeof METHOD };

type Config = { url: string };

export class Api {
    private readonly request: <D>(url: string, params: RequestParams) => Promise<ApiResponse<D>>;

    constructor(config: Config) {
        this.request = async function <D>(suffix: string, params: RequestParams): Promise<ApiResponse<D>> {
            const fullUrl = `${config.url}/${suffix}`;

            return appFetch<D>(fullUrl, params);
        };
    }

    public get = async <D>(url: string, queryParams?: Record<string, string>, params?: AppRequestParams): Promise<ApiResponse<D>> => {
        const queryString = queryParams ? getQueryString(queryParams) : '';
        const fullUrl = `${url}${queryString}`;

        return await this.request(fullUrl, {
            ...params,
            method: METHOD.GET,
        });
    }

    public post = async <D>(url: string, body: Record<string, any>, params?: AppRequestParams): Promise<ApiResponse<D>> => {
        return await this.request(url, {
            ...params,
            method: METHOD.POST,
            body: JSON.stringify(body),
        })
    }
}