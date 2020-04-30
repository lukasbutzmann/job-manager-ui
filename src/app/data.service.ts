import { Job } from './jobs/job.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
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


  job: Job ;

  constructor() { }

// Select a single job from the array of jobs by its index
  selectJobByID(index: number){
    this.job = this.jobs[index];
  }

  message(){
    console.log('Hi from dataService');
  }
}

