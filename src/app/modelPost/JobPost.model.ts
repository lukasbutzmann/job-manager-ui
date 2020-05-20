import { AreaOfInterest } from './../modelGet/areaOfInterest.model';


export interface JobPost {
  areaOfInterest: AreaOfInterest;
  created: '';
  description: '';
  execution: {
    event: {
      eventType: 'SingleJobExecution'
    },
    pattern: ''
  };
  id: '';
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
  lastFinishedExecution: '';
  name: string;
  processingTool: string;
  productCollection: string;
  retrySettings: {
    maxRetries: number,
    retryDelay_Millies: number
  };
  status: string;
  temporalCoverage: {
    duration: string,
    previousExecution: true
  };
  useCase: string;
}
