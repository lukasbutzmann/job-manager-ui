import { element } from 'protractor';

import { Job } from './../modelGet/job.model';

import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { Component, OnInit, NgModule, ViewChild, ElementRef, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProcessMapping } from './../processMapping.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-new',
  templateUrl: './job-new.component.html',
  styleUrls: ['./job-new.component.css']
})
export class JobNewComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  process: string;

  job: any = {
    areaOfInterest: {
      extent: [
        6.9315, 50.9854, 7.6071, 51.319
      ]
    },
    created: '',
    description: 'testing sealing factor via swagger',
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
    name: 'test manual sealing factor',
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


  // initialize the process mapping
  processMappings: ProcessMapping[] = [];

  // set selected Processing Tool
  selectedProcessingTool = '';

  constructor(private router: Router, private dataService: DataService, private http: HttpClient) {

  }

  ngOnInit() {

    // get an instance of the process mappings
    this.http.get<ProcessMapping[]>('assets/processMappings.json').subscribe(data => {
      this.processMappings = data;
    });

  }

  // submit form object and print it in console
  /*     onSubmitJob(form: NgForm) {
         console.log('submitted', form);
       } */


  // post a new job to the server
  onSubmitJob() {
    let relevantProductCollection = '';
    for (const item of this.processMappings) {
      if (item.processId === this.selectedProcessingTool) {
        relevantProductCollection = item.productCollection[0];
      }
    }


    const inputArray = [];
    for (const key in this.signupForm.value) {
      if (this.signupForm.value.hasOwnProperty(key)) {
        const element = this.signupForm.value[key];
        if (key.startsWith('input_')) {
          inputArray.push(element);
        }
      }
    }
    console.log(inputArray);


    const testJob = {
      areaOfInterest: {
        extent: this.signupForm.value.extent.split`,`.map(x => + x)
      }
      ,
      created: '',
      description: this.signupForm.value.jobDescription,
      execution: {
        pattern: this.signupForm.value.pattern
      },
      id: '',
      inputs: inputArray,
      name: this.signupForm.value.jobName,
      processingTool: this.signupForm.value.processingTool,
      productCollection: relevantProductCollection, // this depends on the processingTool How to get this from the mapping?
      retrySettings: {
        maxRetries: 5,
        retryDelay_Millies: 300000
      },
      temporalCoverage: {
        duration: this.signupForm.value.duration,
      },
      useCase: this.signupForm.value.useCase,
    } as Job;


    // console.log(this.signupForm);
    // console.log(this.signupForm.value.areaOfInterest.extent.split`,`.map(x => + x));
    // this.testJob.execution.pattern = this.signupForm.value.execution.pattern;
    console.log(testJob);
    console.log(this.process);
    // console.log(this.signupForm.value.areaOfInterest.extent.split`,`.map(x => + x));
    this.dataService.storeData(testJob)
      .subscribe(responseData => {
        console.log(responseData);
        this.router.navigate(['/']);
      });
  }

  // post a new job in a form  to the server
  /*     onSubmitJob(form: NgForm) {
        this.dataService.storeData(form)
          .subscribe(responseData => {
            console.log(responseData);
          });
      } */


}
