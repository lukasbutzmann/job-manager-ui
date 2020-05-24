import { TemporalCoverage } from './../modelGet/temporalCoverage.model';
import { Input } from './../modelGet/input.model';
import { Execution } from './../modelGet/execution.model';
import { AreaOfInterest } from './../modelGet/areaOfInterest.model';


export interface JobPost {
  areaOfInterest: AreaOfInterest;
  id: string;
  // created: string;
  description?: string;
  execution: Execution;
  inputs: Input[];
  name: string;
  processingTool: string;
  productCollection: string;
  temporalCoverage: TemporalCoverage;
  useCase: string;
}
