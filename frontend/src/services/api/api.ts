import { getQueryString } from './utils/get-query-string';
import { BASE_PARAMS, METHOD } from './constants';
import {
    RequestGetParams,
    RequestPostParams,
    ApiResponse,
} from './types';

type RequestParams = RequestInit & { method: keyof typeof METHOD };

type Config = { url: string };

export class Api {
    private readonly request: <D>(url: string, params: RequestParams) => Promise<ApiResponse<D>>;

    constructor(config: Config) {
        this.request = async function <D>(suffix: string, params: RequestParams): Promise<ApiResponse<D>> {
            try {
                const response = await fetch(`${config.url}/${suffix}`, {
                    ...params,
                    ...BASE_PARAMS,
                });

                const data = await response.json();

                return {
                    isError: !data,
                    errorMessage: !data ? 'empty data': '',
                    data: data || {},
                };
            } catch (error: any) {
                return Promise.reject({
                    isError: true,
                    errorMessage: error.message,
                    data: {},
                });
            }
        };
    }

    public get = <D>(url: string, params?: RequestGetParams): Promise<ApiResponse<D>> => {
        const { queryParams, ...restParams } = params || {};
        const queryString = queryParams ? getQueryString(queryParams) : '';
        const fullUrl = `${url}${queryString}`;

        return this.request(fullUrl, {
            ...restParams,
            method: METHOD.GET,
        });
    }

    public post = <D>(url: string, { body, ...params }: RequestPostParams): Promise<ApiResponse<D>> => {
        return this.request(url, {
            ...params,
            method: METHOD.POST,
            body: JSON.stringify(body),
        })
    }
}