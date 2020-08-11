import { Injectable } from '@angular/core';
import { IUserEntry } from './models';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private userVariables: IUserEntry;
  private restaurantList = [];
  constructor(private http: HttpClient) { }

  get userEntry(): IUserEntry {
    return this.userVariables;
  }
  set userEntry(entry: IUserEntry) {
    this.userVariables = entry;
    this.userVariables.distance = this.getMeters(this.userVariables.distance);
  }

  private getMeters(i: number): number {
    return i * 1609.344;
  }

  async getRestaurants() {

  }
}
