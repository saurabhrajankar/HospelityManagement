import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplaydoctorComponent } from './displaydoctor/displaydoctor.component';

const routes: Routes = [
  { path:'login',component:LoginComponent},
  { path:'signup',component:SignUpComponent},
  { path:'dashboard',component:DashboardComponent},
  {path :'displaydoctor',component:DisplaydoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
