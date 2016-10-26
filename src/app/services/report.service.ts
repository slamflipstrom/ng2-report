import { Injectable } from '@angular/core';
import { IReportData } from '../shared/interfaces';

import { CONFIG_DATA } from '../shared/mock-data';

@Injectable()
export class ReportService {

  constructor() { }

  getData(): IReportData {
     return CONFIG_DATA;
  }
}

