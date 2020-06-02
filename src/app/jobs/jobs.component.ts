import { Job } from '../modelGet/job.model';
import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  selectedJobItem: Job;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.dataService.getData();

    this.dataService.jobSelected
    .subscribe(
      (job: Job) => {
        this.selectedJobItem = job;
      }
    );
  }

}

