import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  @Input() job: Job;

  constructor() { }

  ngOnInit(): void {
  }

}
