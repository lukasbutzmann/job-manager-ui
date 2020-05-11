import { Job1 } from './job1.model';

export interface Page {
  page: number;
  size: number;
  total: number;
  data: Job1[];
}
