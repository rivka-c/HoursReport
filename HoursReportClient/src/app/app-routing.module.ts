import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { HoursReportComponent } from './hours-report/hours-report.component';
import { HoursConcentrationComponent } from './hours-concentration/hours-concentration.component';
import {AuthGuard} from '../app/auth.guard'

const appRoutes: Routes = [
 
  {path: '', component: LoginComponent},
   {path: 'Home', component: HomeComponent,children:[
    {path: 'HoursReport', component: HoursReportComponent},
    {path: 'HoursConcentration', component: HoursConcentrationComponent,canActivate: [AuthGuard]}] },
   {path: 'Login', component: LoginComponent },
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule,MatFormFieldModule ,MatCardModule]
})

export class AppRoutingModule { }