import { Job1 } from './../../models/job1.model';
import { Page } from './../../models/page.model';
import { logging } from 'protractor';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job.model';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job1[] = [];


  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.jobs = this.dataService.getJobs();

    // here all jobs from the server are fetched with a method defined in the data service
    this.dataService.onGetData()
      .subscribe((jobs: Page) => {
        console.log(jobs.data);
        this.jobs = jobs.data;
        // return jobs.data;
      });

  }

}
