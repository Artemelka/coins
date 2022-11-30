import { ApiServiceResponse } from '@/services/api';

export type Country = {
  active: boolean;
  name: string;
  description: string;
  id: number;
  imageUri: string;
  regionId: number;
};

type ResponseCountries = Omit<Country, 'imageUri' | 'name'> & {
  imageUrl: string;
  countryName: string;
};

export type CountriesData = { countries: Array<ResponseCountries> };

export type CountriesGetResponse = ApiServiceResponse<{ countries: Array<Country> }>;