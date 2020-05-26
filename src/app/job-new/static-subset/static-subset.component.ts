import { Component, OnInit, Input} from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-static-subset',
  templateUrl: './static-subset.component.html',
  styleUrls: ['./static-subset.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class StaticSubsetComponent implements OnInit {
@Input() index: number;
@Input() defaultProcessID: string;

  constructor() { }

  ngOnInit(): void {
  }

}
