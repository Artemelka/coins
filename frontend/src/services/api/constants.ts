export const METHOD = {
    GET: 'GET',
    POST: 'POST',
} as const;

export const BASE_PARAMS: RequestInit = {
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
};