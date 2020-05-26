import { Subject } from 'rxjs';
import { DataService } from './../../../data.service';
import { Job } from '../../../modelGet/job.model';
import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.css']

})
export class JobListItemComponent implements OnInit {
  @Input() job: Job;
  // create Subject for ID and you subscribe to this subject in the job list component

  public isCollapsed = true;

  constructor( private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  onSelected(){
    this.isCollapsed = !this.isCollapsed;
    // this.dataService.jobSelected.emit(this.job);
  }

// delete method which is executed when Delete button of an item is clicked
// this should also set fire the Subject JobID, so that the job list receives the ID
  onDelete(){
    this.dataService.deleteData(this.job.id)
    .subscribe(() => {
      console.log('id of deleted job: ' + this.job.id);
      // this.router.navigate(['/']);
    });
  }

}
