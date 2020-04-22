import { Job } from '../../job.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.css']
})
export class JobListItemComponent implements OnInit {
  @Input() job: Job;
  @Output() selectedJobItem = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.selectedJobItem.emit();
  }
}
