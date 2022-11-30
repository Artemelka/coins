export type QueryParams = Record<string, string>;

export type AppRequestParams = Partial<Omit<RequestInit, 'body' | 'method' | 'queryParams'>>;

export type ApiServiceResponse<D = Record<string, never>> = {
    isError: boolean;
    errorMessage: string;
    data: D,
}