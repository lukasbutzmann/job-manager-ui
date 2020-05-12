import { Job } from './job.model';

export interface Page {
  page: number;
  size: number;
  total: number;
  data: Job[];
}
