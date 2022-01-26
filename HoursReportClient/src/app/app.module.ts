import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HoursReportComponent } from './hours-report/hours-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import{MatIcon, MatIconModule } from '@angular/material/icon'
import { MatNativeDateModule} from '@angular/material/core';
import { MatInputModule} from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard} from '../app/auth.guard'
import { AuthService} from '../app/Services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs'
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { HoursConcentrationComponent } from './hours-concentration/hours-concentration.component';
import {MatSortModule} from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
    import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
    import {DragDropModule }from '@angular/cdk/drag-drop'
    import{DatePipe} from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HoursReportComponent,
    HomeComponent,
    HoursConcentrationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
    AppRoutingModule,
   MatCardModule,
   HttpClientModule,
 MatSelectModule,
 NgxMatSelectSearchModule,
   DragDropModule,
   MatSortModule,
   MatTabsModule,
   MatIconModule
  ],
  providers: [AuthGuard,AuthService,DatePipe
  ],
    bootstrap: [AppComponent]
    
})
export class AppModule { }
