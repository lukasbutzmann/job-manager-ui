import { Injectable, EventEmitter } from '@angular/core';

import { Page } from '../modelGet/page.model';
import { Job } from '../modelGet/job.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DataService {
  jobSelected = new EventEmitter<Job>();
  jobs: Job[] = [];

  constructor(private http: HttpClient) { }

  // Fetch all jobs from server
  getData() {
    return this.http.
      // tslint:disable-next-line: max-line-length
      get<Page<Job>>('https://wacodis.demo.52north.org/wacodis-job-definition-api/jobDefinitions')
      .pipe(
        catchError(this.handleError)); // http://localhost:8080/jobDefinitions
  }

  // Post a job
  storeData(jobToPost: any) {
    const job = jobToPost;
    return this.http.
      post('https://wacodis.demo.52north.org/wacodis-job-definition-api/jobDefinitions', job)
      .pipe(
        catchError(this.handleError));
  }

  // Delete selected job
  deleteData(id: string) {
    return this.http.
      delete(`https://wacodis.demo.52north.org/wacodis-job-definition-api/jobDefinitions/${id}`);
  }

  handleError(error: HttpErrorResponse) {
    // console.log(error.status);
    return throwError(error);
  }
}

