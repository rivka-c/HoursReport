import { Component, OnInit } from '@angular/core';
import { HoursReport } from '../models/hoursReport';
import { Project } from '../models/project';
import { HoursReportService } from '../Services/hours-report.service';
import { DatePipe } from '@angular/common'
import { User } from '../models/user';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hours-report',
  templateUrl: './hours-report.component.html',
  styleUrls: ['./hours-report.component.css']
})
export class HoursReportComponent implements OnInit {

  projects: Project[] = [];
  date:string="";
  project:number=0;
  fromTime:string="";
  toTime:string="";

  hoursReport: HoursReport[]=[];
  myTimePicker:string="00:00";
    constructor(public hoursService:HoursReportService,public datePipe:DatePipe,public authService:AuthService, private _router: Router) {
       
    }

  ngOnInit(): void {
    this.hoursService.getHoursProject(this.authService.MyUser.id).subscribe((res: any) => {

      this.projects = res;
    })
  }

  ok() {
    this.hoursReport[0]=new HoursReport();
    let latest_date =this.datePipe.transform(this.date, 'yyyy-MM-dd');

   let d=new Date(latest_date+'T'+this.fromTime);

   this.hoursReport[0].fromDateTime=d;
   
   d=new Date(latest_date+'T'+this.toTime);
    
    this.hoursReport[0].toDateTime=d;
    this.hoursReport[0].userId=this.authService.MyUser.id;
    this.hoursReport[0].projectId=this.project;
    this.hoursReport[0].id=2;
    this.hoursService.addHoursReport(this.hoursReport[0]).subscribe((res: any) => {
        
      this._router.navigate(['Home']);
      })
  }

 

}
