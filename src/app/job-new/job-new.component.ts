import { JobPost } from './../modelPost/JobPost.model';
import { Job } from './../modelGet/job.model';
import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-job-new',
  templateUrl: './job-new.component.html',
  styleUrls: ['./job-new.component.css']
})
export class JobNewComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;

  job: any = {
    areaOfInterest: {
      extent: [
        6.9315,
        50.9854,
        7.6071,
        51.319
      ]
    },
    created: '2020-05-15T09:46:18.537Z',
    description: 'sealing factor',
    execution: {
      event: {
        eventType: 'SingleJobExecutionEvent'
      },
      pattern: ''
    },
    id: '',
    inputs: [
      {
        identifier: 'OPTICAL_IMAGES_SOURCES',
        sourceType: 'CopernicusSubsetDefinition',
        satellite: 'sentinel-2',
        maximumCloudCoverage: 50
      },
      {
        sourceType: 'StaticSubsetDefinition',
        identifier: 'MASKING_DATA',
        value: 'http://wacodis.eftas.com:8081/geoserver/wacodis/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=wacodis:mask_befestigungsgrad&outputFormat=gml3',
        dataType: 'text'
      }
    ],
    lastFinishedExecution: '2020-05-15T09:46:18.537Z',
    name: 'Sealing',
    processingTool: 'de.hsbo.wacodis.sealing_factor',
    productCollection: 'sealing-factor',
    retrySettings: {
     maxRetries: 0,
     retryDelay_Millies: 0
    },
    status: 'waiting',
    temporalCoverage: {
      duration: '',
      previousExecution: true
    },
    useCase: ''
  };

  // job: JobPost;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {

  }

  // here we access the form object before actually submitting it.
  // Therefore we use ViewChild as above
  onSubmit() {
    console.log(this.signupForm);
  }

  // here we submit the form object and print it in the console
  // onSubmitJob(form: NgForm) {
  //    console.log('submitted', form);
  //  }


  // post a new job to the server
  onSubmitJob() {
    console.log(this.signupForm);
    this.dataService.storeData(this.job)
      .subscribe(responseData => {
        console.log(responseData);
      });
    this.dataService.storeData(this.job);
    // this.router.navigate(['/']);
  }

}
