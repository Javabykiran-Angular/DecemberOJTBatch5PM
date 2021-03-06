import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, ComponentImport } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

// import { LoginComponent } from './login/login.component';
// import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
// import { NotFoundComponent } from './not-found/not-found.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentImport,
    HeaderComponent,
    UpdateemployeeComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
