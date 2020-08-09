import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

export interface IGeoLocation {
  lat: number;
  lon: number;
}

interface IReverseResponse {
  results: {
    address_components: {}[],
    formatted_address: string,
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private deviceLocation: IGeoLocation = { lat: 0, lon: 0 };
  locationSubject = new Subject<IGeoLocation>();


  constructor(private http: HttpClient) {
  }

  get locus(): IGeoLocation {
    return this.deviceLocation;
  }

  /**
   * Checks if the geolocation ability is available in the browser
   */
  checkIfLocationIsAvailable(): boolean {
    return ('geolocation' in navigator);
  }

  findLocationfromDevice(): void {
    navigator.geolocation?.getCurrentPosition(this.findLocationfromDeviceSuccess.bind(this), this.findLocationfromDeviceError.bind(this));
  }

  private findLocationfromDeviceSuccess(position: Position): void {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    this.deviceLocation = { lat, lon };
    this.locationSubject.next(this.deviceLocation);
  }

  private findLocationfromDeviceError(err: any): void {
    console.log(err);
  }


  async findAddressfromGeoLocation(locus: IGeoLocation): Promise<string> {
    const apiAddress = 'https://maps.googleapis.com/maps/api/geocode/json?latlng={0},{1}&key={3}';
    let apiQuery = apiAddress.replace('{0}', locus.lat.toString());
    apiQuery = apiQuery.replace('{1}', locus.lon.toString());
    apiQuery = apiQuery.replace('{3}', environment.googleAPI);

    const response = await this.http.get<IReverseResponse>(apiQuery).toPromise();
    const results = response.results;
    const result = results.find(r => r.address_components.length < 8);
    return result.formatted_address;
  }
}
