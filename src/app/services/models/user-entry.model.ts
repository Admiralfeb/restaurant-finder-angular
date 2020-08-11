import { IGeoLocation } from './geolocation.model';

export interface IUserEntry {
  address?: string;
  coordinates: IGeoLocation;
  price: number;
  distance: number;
}
