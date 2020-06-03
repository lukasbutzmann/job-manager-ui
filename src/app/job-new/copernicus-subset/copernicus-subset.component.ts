import { Component, OnInit, Input, ViewChild  } from '@angular/core';
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

  sourceType = 'CopernicusSubsetDefinition';
  selectedSatellite = '';
  productType: string;

  constructor() { }
  ngOnInit(): void {
  }

}
