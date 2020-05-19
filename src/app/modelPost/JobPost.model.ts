import { AreaOfInterest } from './../modelGet/areaOfInterest.model';


export interface JobPost {
  areaOfInterest: AreaOfInterest;
  // created: string;
  // description: string;
  // execution: {
  //   event: {
  //     eventType: 'SingleJobExecution'
  //   },
  //   pattern: string
  // };
  // id: string;
  inputs: [
    {
      identifier: string,
      sourceType: string,
      satellite: string,
      maximumCloudCoverage: number
    },
    {
      sourceType: string,
      identifier: string,
      value: string,
      dataType: string
    }
  ];
  // lastFinishedExecution: string;
  name: string;
  processingTool: string;
  productCollection: string;
  // retrySettings: {
  //   maxRetries: number,
  //   retryDelay_Millies: number
  // };
  // status: string;
  // temporalCoverage: {
  //   duration: string,
  //   previousExecution: true
  // };
  // useCase: string;
}
