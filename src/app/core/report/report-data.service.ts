import { Injectable } from '@angular/core';
import { RandomService } from '../../core/random/random.service';
import { IReportData, IAPISvcData } from '../../index';
import { DatePipe } from '@angular/common';
import { FileSizePipe } from './../../core/file-size.pipe'

@Injectable()
export class ReportDataService {

  constructor(private random: RandomService,     private datePipe: DatePipe,
    private fileSizePipe: FileSizePipe) { }

  getData(lazy: boolean = false, event): IReportData[] {
    if (lazy === false) {
      let rawReportData = this.getRandomData();
      let filteredData = this.filterData(rawReportData);
      return filteredData;
    } else {
      let rawReportData = this.getRandomData2();
      let filteredData = this.filterData(rawReportData)
      if (event !== undefined) {
        return filteredData.slice(event.first, (event.first + event.rows));
      } else {
        return filteredData;
      }
    }
  }

  getRandomData(): any {
    const numRows = this.random.getRandomInt(100, 200);
    const data = this.buildRandomData(numRows);
    return data;
  }

  getRandomData2(): any {
    const numRows = this.random.getRandomInt(40, 50);
    const data = this.buildRandomData(numRows);
    return data;
  }

  filterData(data): any {
    let filteredData = data.map( (row: IAPISvcData) => {
      row.date = this.datePipe.transform(row.date, 'short');
      if (typeof row.transferSize === 'number') {
        row.transferSize = this.fileSizePipe.transform(row.transferSize, 0);
      } else if
      (typeof row.transferSize === 'string') {
        row.transferSize = this.fileSizePipe.transformString(row.transferSize, 0);
      }
      return row;
    });
    return filteredData;
  }

  buildRow() {
    let row = {
      date: this.random.getRandomTimestamp(),
      name: this.random.getRandomName(),
      assetId: this.random.getRandomInt(1, 100000),
      transferSize: this.random.getRandomInt(0, 1000000000)
    };
    return row;
  };

  buildRandomData(numRows): IAPISvcData[] {
    let data = [];
    for (let i = 1; i < numRows; i++) {
      data.push(this.buildRow());
    }
    return data;
  }
}

