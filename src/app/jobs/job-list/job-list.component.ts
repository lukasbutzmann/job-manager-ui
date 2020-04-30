import { DataService } from './../../data.service';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Job } from '../job.model';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  @Output() selectedJobElement = new EventEmitter<Job>();
  jobs: Job[] = [];

/*   jobs: Job[] = [
    new Job('Landnutzungsklassifikation 1',
             'Klassifizierung von Grünflächen',
            '04/13/2019',
            'waiting',
            15),
    new Job('Landnutzungsklassifikation 2',
             'Klassifizierung von Nutzflächen',
             '04/15/2019',
             'running',
             10),
    new Job ( 'Versiegelungsgrad',
              'Versiegelung berechnen',
              '04/21/2020',
              'inactive',
              15)
  ]; */

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.jobs = this.dataService.jobs;
  }

  onJobItemSelected(selectedJob: Job) {
    this.selectedJobElement.emit(selectedJob);
  }
}
