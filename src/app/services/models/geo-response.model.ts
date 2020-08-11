import { IGeoLocation } from './geolocation.model';

export interface IGeoResponse {
  results: {
    address_components: {}[],
    formatted_address: string,
    geometry: { location: IGeoLocation }
  }[];
  status: string;
}
