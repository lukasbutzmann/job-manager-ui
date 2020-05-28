import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-copernicus-subset',
  templateUrl: './copernicus-subset.component.html',
  styleUrls: ['./copernicus-subset.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CopernicusSubsetComponent implements OnInit {
  @Input() index: number;
  sourceType = 'CopernicusSubsetDefinition';
  @Input() defaultProcessID: string;

  constructor() { }

  ngOnInit(): void {
  }

}
