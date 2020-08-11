import { Component, OnInit } from '@angular/core';
import { IUserEntry } from '@services/models';
import { MapService } from '@services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  userInput: IUserEntry;
  restaurants: [];

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.userInput = this.mapService.userEntry;
    this.mapService.getRestaurants();
  }

  showUserInput(): void {

  }
}
