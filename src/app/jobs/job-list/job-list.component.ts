
import { Job } from '../../modelGet/job.model';
import { Page } from '../../modelGet/page.model';
import { DataService } from './../../data.service';
import { Component, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];


  constructor(private dataService: DataService) { }

  ngOnInit() {

    // here all jobs from the server are fetched with a method defined in the data service
    this.dataService.getData()
      .subscribe((jobs: Page<any>) => {
        this.jobs = jobs.data;
      });

  }

}
