import { Injectable } from '@angular/core';

import { RandomService } from '../../core/random/random.service';
import { IReportData, IAPISvc } from '../../index';

@Injectable()
export class ReportDataService {

  constructor(private random: RandomService) { }

  getData(): IReportData[] {
    return this.getRandomData();
  }

  getRandomData(): any {
    const numRows = this.random.getRandomInt(100, 200);
    const data = this.buildRandomData(numRows);
    return data;
  }

  buildRow() {
    let row = {
      date: this.random.getRandomTimestamp(),
      name: this.random.getRandomName(),
      assetId: this.random.getRandomInt(1, 100000),
      transferSize: this.random.getRandomInt(1, 1000000000)
    };
    return row;
  };

  buildRandomData(numRows): IAPISvc[] {
    let data = [];
    for (let i = 1; i < numRows; i++) {
      data.push(this.buildRow());
    }
    return data;
  }
}

