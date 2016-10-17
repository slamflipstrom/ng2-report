import { Injectable } from '@angular/core';
import { CONFIG_DATA, IReportData } from '../shared/mock-data';



@Injectable()
export class ReportService {

  constructor() { }

  getData(): IReportData {
     return CONFIG_DATA;
  }
}

