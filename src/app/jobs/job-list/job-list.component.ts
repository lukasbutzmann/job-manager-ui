import { Job } from '../job.model';
import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent  {
  @Output() selectedJobElement = new EventEmitter<Job>();

  jobs: Job[] = [
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
  ];


  onJobItemSelected(selectedJob: Job) {
    this.selectedJobElement.emit(selectedJob);
  }
}
