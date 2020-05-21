// import { Job } from './job.model';

export interface Page<T> {
  page: number;
  size: number;
  total: number;
  data: T[];
}
