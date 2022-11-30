import { Api } from '../../api';
import type { RegionsData, RegionsGetResponse } from './types';

export class RegionsEndpoint {
  public get = async (): Promise<RegionsGetResponse> => {
    return await Api.get<RegionsData>('regions.json');
  }
}