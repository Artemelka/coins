import { appFetch, getQueryString } from './utils';
import { METHOD } from './constants';
import {
    AppRequestParams,
    ApiServiceResponse,
} from './types';

type RequestParams = RequestInit & { method: keyof typeof METHOD };

type Config = { url: string };

export class ApiService {
    private readonly request: <D>(url: string, params: RequestParams) => Promise<ApiServiceResponse<D>>;

    constructor(config: Config) {
        this.request = async function <D>(suffix: string, params: RequestParams): Promise<ApiServiceResponse<D>> {
            const fullUrl = `${config.url}/${suffix}`;

            return appFetch<D>(fullUrl, params);
        };
    }

    public get = async <D>(url: string, queryParams?: Record<string, string>, params?: AppRequestParams): Promise<ApiServiceResponse<D>> => {
        const queryString = queryParams ? getQueryString(queryParams) : '';
        const fullUrl = `${url}${queryString}`;

        return await this.request(fullUrl, {
            ...params,
            method: METHOD.GET,
        });
    }

    public post = async <D>(url: string, body: Record<string, any>, params?: AppRequestParams): Promise<ApiServiceResponse<D>> => {
        return await this.request(url, {
            ...params,
            method: METHOD.POST,
            body: JSON.stringify(body),
        })
    }
}