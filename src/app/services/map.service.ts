import { Injectable } from '@angular/core';
import { IUserEntry } from './models';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private userVariables: IUserEntry;
  constructor() { }

  get userEntry(): IUserEntry {
    return this.userVariables;
  }
  set userEntry(entry: IUserEntry) {
    this.userVariables = entry;
  }
}
