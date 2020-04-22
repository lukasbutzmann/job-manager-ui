import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// Eventemitter which emits the information on which feature is selected
 @Output() selectedFeature = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

// emitting the selected Feature
  onSelect(feature: string) {
    this.selectedFeature.emit(feature);
  }


}
