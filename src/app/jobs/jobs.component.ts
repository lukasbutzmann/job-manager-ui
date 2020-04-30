import { Component } from '@angular/core';
import { Job } from './job.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  selectedJobItem: Job;



}

