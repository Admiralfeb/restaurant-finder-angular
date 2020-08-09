import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Output() displayUserInput = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  showUserInput(): void {
    this.displayUserInput.emit();
  }
}
