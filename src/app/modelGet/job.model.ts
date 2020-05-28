import { Input} from './input.model';
import { RetrySettings } from './retrySettings.model';
import { TemporalCoverage } from './temporalCoverage.model';
import { Execution } from './execution.model';
import { AreaOfInterest } from './areaOfInterest.model';

export interface Job {
  areaOfInterest: AreaOfInterest;
  created: string;
  description: string;
  execution: Execution;
  id: string;
  inputs: Input[];
  lastFinishedExecution: string;
  name: string;
  processingTool: string;
  productCollection: string;
  retrySettings: RetrySettings;
  status: string;
  temporalCoverage: TemporalCoverage;
  useCase: string;
}
