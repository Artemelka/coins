import { BASE_PARAMS, METHOD } from '../../constants';
import type { ApiResponse } from '../../types';

type RequestParams = RequestInit & { method: keyof typeof METHOD };

export const appFetch = async <R>(url: string, params: RequestParams): Promise<ApiResponse<R>> => {
    try {
        const response = await fetch(url, {
            ...params,
            ...BASE_PARAMS,
        });

        const data = await response.json();

        return Promise.resolve({
            isError: !data,
            errorMessage: !data ? `Api request: "${url}" return empty data`: '',
            data: data || {},
        });
    } catch (error: any) {
        return Promise.resolve({
            isError: true,
            errorMessage: error.message,
            data: {} as R,
        });
    }
}