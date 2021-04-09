import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',redirectTo:"/login",pathMatch:"full"
  },
  {
    path:'EmployeeDetails/:id',component:EmployeeDetailsComponent
  },
  {
    path:'**',component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ComponentImport=[
  HomeComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    NotFoundComponent
];
