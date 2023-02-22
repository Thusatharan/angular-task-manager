import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { WorkTasksComponent } from './work-tasks/work-tasks.component';
import { StudyTasksComponent } from './study-tasks/study-tasks.component';
import { PersonalTasksComponent } from './personal-tasks/personal-tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskCardComponent } from './task-card/task-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkTasksComponent,
    StudyTasksComponent,
    PersonalTasksComponent,
    DashboardComponent,
    TaskCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
