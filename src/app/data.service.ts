import { Page } from './models/page.model';
import { Job1 } from './models/job1.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

import { Job } from './models/job.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  jobSelected = new EventEmitter<Job>();

  // private jobs: Job[] = [
  // new Job('Landnutzungsklassifikation 1',
  //         'Klassifizierung von Grünflächen',
  //         '04/13/2019',
  //         'waiting',
  //         15),
  // new Job('Landnutzungsklassifikation 2',
  //         'Klassifizierung von Nutzflächen',
  //         '04/15/2019',
  //         'running',
  //         10),
  // new Job ( 'Versiegelungsgrad',
  //           'Versiegelung berechnen',
  //           '04/21/2020',
  //           'inactive',
  //           15)
  // ];

  private jobs: Job1[] = [];

  constructor(private http: HttpClient) { }

  getJobs() {
    return this.jobs.slice();
  }

  // here we fetch the jobs from the server
  private getData() {
    return this.http.get<Page>('https://wacodis.demo.52north.org/wacodis-job-definition-api/jobDefinitions');
    // .pipe
    //   (map(responseData => {
    //     const jobsArray = [];
    //   // tslint:disable-next-line: forin
    //     for (const key in responseData) {
    //       jobsArray.push({...responseData[key] });
    //   }
    //     return jobsArray[3];
    //   })
    // )
    // .subscribe((jobs: Page ) => {
    //   console.log(jobs.data);
    //   // return jobs.data;
    // });
  }

  onGetData() {
    return this.getData();
  }

  postData() {
    // here post request
  }

  deleteData() {
    // here delete request
  }
}

