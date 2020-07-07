import { Job } from '../../../modelGet/job.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.css']

})
export class JobListItemComponent implements OnInit {
  @Input() job: Job;
  @Output() idDelete: EventEmitter<string> = new EventEmitter();
  public isCollapsed = true;

  constructor() { }
  ngOnInit() { }

  // When clicked on 'Details' the information is toggled
  onSelected() {
    this.isCollapsed = !this.isCollapsed;
  }

  // Emit ID of the job when its delete button is clicked
  onDelete() {
    this.idDelete.emit(this.job.id);
  }
}
