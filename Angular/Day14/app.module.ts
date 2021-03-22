import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventBinding3Component } from './event-binding3/event-binding3.component';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { FormsModule } from '@angular/forms';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { UserComponent } from './user/user.component';
import { Task5Component } from './task5/task5.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { InbuildPipeComponent } from './inbuild-pipe/inbuild-pipe.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { SummaryPipe } from './summary.pipe';
import { CustomServiceComponent } from './custom-service/custom-service.component';
import { CourseService } from './course.service';

@NgModule({
  declarations: [
    AppComponent,
    EventBinding3Component,
    IfdirectiveComponent,
    FordirectiveComponent,
    SwitchdirectiveComponent,
    UserComponent,
    Task5Component,
    ParentComponent,
    Child1Component,
    Child2Component,
    InbuildPipeComponent,
    CustompipeComponent,
    SummaryPipe,
    CustomServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
