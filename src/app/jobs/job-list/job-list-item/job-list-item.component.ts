
import { DataService } from './../../../data.service';
import { Job } from '../../job.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.css']

})
export class JobListItemComponent implements OnInit {

  @Input() job: Job;
  @Output() selectedJobItem = new EventEmitter<void>();

  @Input() id: number;


  constructor( private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  onSelected(){
    this.selectedJobItem.emit();
    this.dataService.message();
    console.log(this.id);
    console.log(this.job);
    this.dataService.selectJobByID(this.id);
    console.log(this.dataService.job);
  }

  //  onSelected() {
  //    this.dataService.selectJobByID(this.id);
  //    console.log(this.dataService.job);
  //    console.log(this.id);
  // }

}
