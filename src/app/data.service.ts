import { Page } from './modelGet/page.model';
import { Job } from './modelGet/job.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  jobSelected = new EventEmitter<Job>();

  private jobs: Job[] = [];

  // job = ['sdfgh', 'dfgh'];

  constructor(private http: HttpClient) { }

  getJobs() {
    return this.jobs.slice();
  }

  // Fetch jobs from server
  private getData() {
    return this.http.get<Page>('https://wacodis.demo.52north.org/wacodis-job-definition-api/jobDefinitions');
    // 'https://wacodis.demo.52north.org/wacodis-job-definition-api/jobDefinitions'

  }

  onGetData() {
    return this.getData();
  }
  // post Job to server
  // postJob(job: Job) {
  //   this.http.post('https://wacodis.demo.52north.org/wacodis-job-definition-api/jobDefinitions', job);
  // }

  storeData(job) {
    const job1 = job;
    return this.http.
      post(
        'http://localhost:8080/jobDefinitions', job1
      );
  }

 // deletes a selected job when clicking the delete button
  deleteData(id: string) {
    console.log(id);
    return this.http.delete(`http://localhost:8080/jobDefinitions/${id}`);
  }


  patchJob() {
    // patch an existent job
  }
}

