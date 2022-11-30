import { ApiServiceResponse } from '@/services/api';

export type Region = {
  active: boolean;
  id: number;
  imageUri: string;
  name: string;
};

export type RegionsData = { regions: Array<Region> };

export type RegionsGetResponse = ApiServiceResponse<RegionsData>;