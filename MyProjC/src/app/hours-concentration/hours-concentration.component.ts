import { Component, OnInit } from '@angular/core';
import { HoursReport } from '../models/hoursReport';
import {Sort} from '@angular/material/sort';
import { HoursConcentrationService } from '../Services/hours-concentration.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-hours-concentration',
  templateUrl: './hours-concentration.component.html',
  styleUrls: ['./hours-concentration.component.css']
})
export class HoursConcentrationComponent implements OnInit {

  Hours: HoursReport[] = [];
  sortedData: HoursReport[]=[];
  fileName= 'ExcelSheet.xlsx'; 
    constructor(public hoursConcentrationService:HoursConcentrationService) {
       
    }

  ngOnInit(): void {
    
    this.hoursConcentrationService.getHoursConcentration().subscribe((res: any) => {
      this.Hours = res;
      this.sortedData=res;
    })
  }

  
  sortData(sort: Sort) {
    const data = this.Hours.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'userId':
          return this.compare(a.userId, b.userId, isAsc);
        case 'projectId':
          return this.compare(a.projectId, b.projectId, isAsc);
        default:
          return 0;
      }
    });
  }
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }

}
