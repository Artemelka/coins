import {
  RegionsEndpoint,
  CountriesEndpoint,
} from './endpoints';

export const Api = {
  Regions: new RegionsEndpoint(),
  Countries: new CountriesEndpoint(),
};

export type {
  Region,
  RegionsGetResponse,
  Country,
  CountriesGetResponse,
} from './endpoints';