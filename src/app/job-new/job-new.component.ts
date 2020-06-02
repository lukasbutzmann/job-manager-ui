// Angular Modules
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// Data models
import { Job } from './../modelGet/job.model';
import { ProcessMapping } from './../processMapping.model';
// Services
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-job-new',
  templateUrl: './job-new.component.html',
  styleUrls: ['./job-new.component.css']
})
export class JobNewComponent implements OnInit {
  // Get access to form object of template
  @ViewChild('f', { static: false }) signupForm: NgForm;
  // processMappings: Instance is set in ngOnInit
  processMappings: ProcessMapping[] = [];
  // selectedProcessingTool is set in the for loop in the template
  selectedProcessingTool = '';

  error: null;
  errorStatus: null;

  constructor(
    private router: Router,
    private dataService: DataService,
    private http: HttpClient) { }

  ngOnInit() {
    // Get instance of the process mappings json file
    this.http.get<ProcessMapping[]>('assets/processMappings.json')
      .subscribe(data => {
        this.processMappings = data;
      });
  }

  onSubmitJob1(f: NgForm) {
    console.log(f);
  }

  // Post a new job to server
  onSubmitJob() {
    // Get value for post request key 'productCollcetion' by applying custom method 'valueProductCollection'
    const relevantProductCollection = this.valueProductCollection(this.processMappings, this.selectedProcessingTool);
    // Create list of input subsets as value for post request key 'inputs' by applying custom method 'valueInputs'
    const inputArray = this.valueInputs(this.signupForm);
    // Set job object which should be sent to server with post request
    const jobForPost = {
      areaOfInterest: {
        extent: this.signupForm.value.extent.split(',').map(Number)
      },
      created: '',
      description: this.signupForm.value.jobDescription,
      execution: {
        pattern: this.signupForm.value.pattern
      },
      id: '',
      inputs: inputArray,
      name: this.signupForm.value.jobName,
      processingTool: this.signupForm.value.processingTool,
      productCollection: relevantProductCollection,
      retrySettings: {
        maxRetries: 0,
        retryDelay_Millies: 0
      },
      temporalCoverage: {
        duration: this.signupForm.value.duration,
      },
      useCase: this.signupForm.value.useCase,
    } as Job;

    console.log(jobForPost);

    // Post the defined job object; post method is defined in the data service
    this.dataService.storeData(jobForPost)
      .subscribe(responseData => {
        console.log(responseData);
        this.router.navigate(['/']);
      },
      error => {
          this.error = error;
          this.errorStatus = error.status;
          console.log(error);
        });
  }




  // -------------------------------------------- Custom Methods-------------------------------------------

  /**
   * The method 'valueInputs' ...
   * @param signupForm is an instance of the template form object
   * @returns The method returns an array of all data subsets required for the relevant process
   */
  private valueInputs(signupForm: NgForm) {
    const inputArray = [];
    for (const key in signupForm.value) {
      if (signupForm.value.hasOwnProperty(key)) {
        const element = signupForm.value[key];
        if (key.startsWith('input_')) {
          inputArray.push(element);
        }
      }
    }
    // console.log(inputArray);
    return inputArray;
  }


  /**
   * The method 'valueProductCollection()' finds the value for the post request key 'productCollection' in the process mapping
   * @param processMappings is an instance of an observable of a JSON file holding mappings of the available job processes
   * @param selectedProcessingTool is the processingTool selected by the user; the value comes from the template form object
   * @returns Method returns a string, which is the value for the request key 'productCollection'
   */
  private valueProductCollection(processMappings: ProcessMapping[], selectedProcessingTool: string) {
    let relevantProductCollection = '';
    for (const item of processMappings) {
      if (item.processId === selectedProcessingTool) {
        relevantProductCollection = item.productCollection[0];
      }
    }
    return relevantProductCollection;
  }
}
