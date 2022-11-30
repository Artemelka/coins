import { Api } from '../../api';
import type { CountriesData, CountriesGetResponse } from './types';

export class CountriesEndpoint {
  public get = async (): Promise<CountriesGetResponse> => {
    const { data, ...rest } = await Api.get<CountriesData>('countries.json');

    const countries = data.countries.map(({ imageUrl, countryName, ...rest}) => ({
      ...rest,
      imageUri: imageUrl,
      name: countryName,
    }));

    return {
      data: {
        countries,
      },
      ...rest,
    };
  }
}