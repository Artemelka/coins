import { AppRequestParams, ApiServiceResponse } from '@/services/api';
import regions from './endpoints/regions.json';
import countries from './endpoints/countries.json';

type Config = { url: string };

export class MockApi {
  private readonly request: <R>(s: string, p: R) => Promise<ApiServiceResponse<R>>;

  constructor(config: Config) {
    this.request = async function (suffix, params) {
      const fullUrl = `${config.url}/${suffix}`;
      const response = this.createResponse(params);

      console.warn('=== API request mock ===', fullUrl);

      return Promise.resolve(response);
    }
  }

  private createResponse = <R>(data: R): ApiServiceResponse<R> => {
    return {
      isError: false,
      errorMessage: '',
      data,
    }
  }

  private endpointResponseSelector = <D>(endpointUrl: string, method: string = 'GET'): D => {
    if (method === 'GET') {
      switch (endpointUrl) {
        case 'regions.json':
          return regions as D;
        case 'countries.json':
          return countries as D;
        default:
          return {} as D;
      }
    }

    return {} as D;
  }

  public get = async <D>(endpointUrl: string, queryParams?: Record<string, string>, params?: AppRequestParams) => {
    const data = this.endpointResponseSelector<D>(endpointUrl);

    return this.request<D>(endpointUrl, data);
  }

  public post = async <D>(endpointUrl: string, body: Record<string, any>, params?: AppRequestParams) => {
    const data = this.endpointResponseSelector<D>(endpointUrl);

    return this.request<D>(endpointUrl, data);
  }
}