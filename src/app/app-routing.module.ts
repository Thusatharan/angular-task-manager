import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalTasksComponent } from './personal-tasks/personal-tasks.component';
import { StudyTasksComponent } from './study-tasks/study-tasks.component';
import { WorkTasksComponent } from './work-tasks/work-tasks.component';

const routes: Routes = [
  {
    component: DashboardComponent,
    path: ''
  },
  {
    component: WorkTasksComponent,
    path: 'work'
  },
  {
    component: StudyTasksComponent,
    path: 'study'
  },
  {
    component: PersonalTasksComponent,
    path: 'personal'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
