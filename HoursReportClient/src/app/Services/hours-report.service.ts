import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HoursReport } from '../models/hoursReport';
const url = environment.apiUrl + "HoursReport";

@Injectable({
  providedIn: 'root'
})
export class HoursReportService {

  constructor(public httpClient:HttpClient) { }
  
  getHoursProject(user:number) {
    return this.httpClient.get(url+"/?user="+user );
  }

  addHoursReport(hoursReport:HoursReport) {
    return this.httpClient.post(url,{toDateTime:hoursReport.toDateTime,fromDateTime:hoursReport.fromDateTime,userId:hoursReport.userId,projectId:hoursReport.projectId});
  }

  
  GetHoursConcentration() {
    return this.httpClient.get(url);
  }

}
