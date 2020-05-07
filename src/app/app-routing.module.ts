import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobNewComponent } from './job-new/job-new.component';
import { JobsComponent } from './jobs/jobs.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/jobs', pathMatch: 'full'},
  {path: 'jobs', component: JobsComponent},
  {path: 'newJob', component: JobNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
