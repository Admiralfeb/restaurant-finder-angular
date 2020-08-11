import { Component, OnInit } from '@angular/core';
import { LocationService } from '@services/location.service';
import { MapService } from '@services/map.service';
import { take } from 'rxjs/operators';
import { IGeoLocation, IUserEntry } from '@services/models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {
  address: string;
  coordinates: IGeoLocation;
  constructor(
    private locationService: LocationService,
    private mapService: MapService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  formatMiles(value: number): string {
    return value + 'mi';
  }

  scanGeoLocation(): void {
    this.locationService.locationSubject.pipe(take(1)).subscribe(val => this.receiveGeoLocation(val));
    this.locationService.findLocationfromDevice();
  }

  private receiveGeoLocation(locus: IGeoLocation): void {
    this.coordinates = locus;
    this.locationService.findAddressfromGeoLocation(locus).then(val => this.address = val);
  }

  async setAddress(): Promise<void> {
    const coors = await this.locationService.findGeoLocationfromAddress(this.address);
    this.coordinates = coors;
  }

  submit(price: number, distance: number): void {
    if (!this.coordinates) {
      this.snackbar.open('Please enter an address or use the Location button.', 'Dismiss');
      return;
    }

    const address = this.address;
    const coordinates = this.coordinates;
    const entry: IUserEntry = { address, coordinates, price, distance };
    this.mapService.userEntry = entry;
    this.router.navigate(['find']);
  }

}
