import { LocationService } from '@services/location.service';
import { take } from 'rxjs/operators';
import { IGeoLocation, IUserEntry } from '@services/models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {

  addressFieldValue: string;
  constructor(private locationService: LocationService) { }

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
    this.locationService.findAddressfromGeoLocation(locus).then(val => this.addressFieldValue = val);
  }

}
