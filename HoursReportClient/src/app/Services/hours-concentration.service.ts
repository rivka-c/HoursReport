import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HoursReport } from '../models/hoursReport';
const url = environment.apiUrl + "HoursConcentration";

@Injectable({
  providedIn: 'root'
})
export class HoursConcentrationService {

  constructor(public httpClient:HttpClient) { }
  

  
  getHoursConcentration() {
    return this.httpClient.get(url);
  }

}
