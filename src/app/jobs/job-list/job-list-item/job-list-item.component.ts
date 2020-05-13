
import { DataService } from './../../../data.service';
import { Job } from '../../../modelGet/job.model';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.css']

})
export class JobListItemComponent implements OnInit {
  @Input() job: Job;

  constructor( private dataService: DataService) {
  }

  ngOnInit() {
  }

  onSelected(){
    this.dataService.jobSelected.emit(this.job);

  }

}
