import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-copernicus-subset',
  templateUrl: './copernicus-subset.component.html',
  styleUrls: ['./copernicus-subset.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CopernicusSubsetComponent implements OnInit {
  @Input() index: number;
  @Input() defaultProcessID: string;
  selectedSatellite = '';
  @Output() selectedSatelliteEmit: EventEmitter<string> = new EventEmitter();
  @Output() selectedCloudCoverageEmit: EventEmitter<number> = new EventEmitter();

  sourceType = 'CopernicusSubsetDefinition';

  productType: string;

  constructor() { }
  ngOnInit(): void {
  }

  updateSelectedSatellite(event: any){
    // console.log(event);
    this.selectedSatelliteEmit.emit(event);
  }

  updateCloudCoverage(event: any){
    // console.log(event);
    this.selectedCloudCoverageEmit.emit(event);
  }

}
