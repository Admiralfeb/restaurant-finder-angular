import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  hideMap = true;

  onUserDisplayChange(): void {
    this.hideMap = !this.hideMap;
  }
}
