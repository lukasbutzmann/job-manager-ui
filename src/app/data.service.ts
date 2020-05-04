import { Job } from './jobs/job.model';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  jobSelected = new EventEmitter<Job>();

  private jobs: Job[] = [
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

  getJobs() {
    return this.jobs.slice();
  }


  constructor() { }

  message(){
    console.log('Hi from dataService');
  }
}

