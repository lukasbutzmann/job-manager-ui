// import { JobsComponent } from './jobs/jobs.component';
import { JobPost } from './modelPost/JobPost.model';
import { Page } from './modelGet/page.model';
import { Job } from './modelGet/job.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  jobSelected = new EventEmitter<Job>();
  jobs: Job[] = [];
  jobsChanged = new Subject<Job[]>();
  emitID = new EventEmitter<string>();


  constructor(private http: HttpClient) { }

  // Fetch all jobs from server
  getData() {
    return this.http.
      get<Page<Job>>(
        'http://localhost:8080/jobDefinitions');
    // 'https://wacodis.demo.52north.org/wacodis-job-definition-api/jobDefinitions'
  }


  // Post a job
  storeData(jobToPost: any) {
    const job = jobToPost;
    return this.http.
      post('http://localhost:8080/jobDefinitions', job);
  }

  // Delete selected job
  deleteData(id: string) {
    return this.http.
      delete(`http://localhost:8080/jobDefinitions/${id}`);
  }

}

