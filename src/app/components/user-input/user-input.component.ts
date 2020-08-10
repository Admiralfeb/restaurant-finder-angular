import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocationService } from '@services/location.service';
import { MapService } from '@services/map.service';
import { take } from 'rxjs/operators';
import { IGeoLocation, IUserEntry } from '@services/models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {
  @Output() userSubmit = new EventEmitter<void>();
  address: string;
  constructor(private locationService: LocationService, private mapService: MapService, private snackbar: MatSnackBar) { }

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
    this.locationService.findAddressfromGeoLocation(locus).then(val => this.address = val);
  }

  submit(price: number, distance: number): void {
    if (!this.address) {
      this.snackbar.open('Please enter an address or use the Location button.', 'Dismiss');
      return;
    }

    const address = this.address;
    const entry: IUserEntry = { address, price, distance };
    this.mapService.userEntry = entry;
    this.userSubmit.emit();
  }

}
