import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  processMappings: any = [];
// define a public property for the process mapping
  /* public processMapping: {
    processId: string,
    name: string,
    productCollection: [
      string
    ],
    inputs: [
      {
        inputType: string,
        processInputId: string
      },
    ]
  }[] = processMappings;
 */


  loadedFeature = 'job-overview';

  onNavigate(selectedFeature: string) {
    this.loadedFeature = selectedFeature;
  }

  constructor(private httpClient: HttpClient){}

   ngOnInit(){
    this.httpClient.get('assets/processMappings.json').subscribe(data => {
      console.log(data);
      this.processMappings = data;
    });
   }
}
