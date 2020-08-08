import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  private deviceLocation = { lat: 0, lon: 0 };


  constructor() {
  }

  /**
   * Checks if the geolocation ability is available in the browser
   */
  checkIfLocationIsAvailable(): boolean {
    return ('geolocation' in navigator);
  }

  findLocationfromDevice(): void {
    navigator.geolocation?.getCurrentPosition(this.findLocationfromDeviceSuccess, this.findLocationfromDeviceError);
  }

  findLocationfromDeviceSuccess(position: Position): void {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    this.deviceLocation = { lat, lon };
  }

  findLocationfromDeviceError(err: any): void {
    console.log(err);
  }
}
