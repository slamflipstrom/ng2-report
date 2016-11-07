import { Injectable } from '@angular/core';
import { IReportData } from '../../shared/interfaces';
import { RandomService } from '../../core/random/random.service';

import { CONFIG_DATA } from '../../shared/mock-data';

@Injectable()
export class ReportDataService {

  constructor(private random: RandomService) { }

  getData(): IReportData {
    this.getRandomData();
    return CONFIG_DATA;
  }

  getRandomData(): any {
    const numRows = this.random.getRandomInt(100, 200);
    console.log(numRows);
  }
}

