import { IReportAPIRequest } from './../../interfaces';
import { DataTableModule, LazyLoadEvent } from 'primeng/primeng';
import { Injectable } from '@angular/core';
import { RandomService } from '../../core/random/random.service';
import { IReportConfig, IAPISvcData, IAPIDataResponse } from '../../index';
import { DatePipe } from '@angular/common';
import { FileSizePipe } from './../../core/file-size.pipe';

@Injectable()
export class ReportDataService {

  // This is to model the API calls in V3 that return page size data with a total count
  private lotsOfData: IAPISvcData[] = this.getRandomData();

  // This is to mimic the API calls in V3 that always return 50 results
  private setAmountOfData: IAPISvcData[] = this.getRandomData2();

  constructor(private random: RandomService,
              private datePipe: DatePipe,
              private fileSizePipe: FileSizePipe) { }

  getData(event): Promise<IAPIDataResponse> {
    let filteredData = this.transformData(this.setAmountOfData);
    return Promise.resolve(
            this.buildReportData(filteredData, this.setAmountOfData.length)
    )
  }

  getLazyData(event: LazyLoadEvent, requestData: IReportAPIRequest): Promise<IAPIDataResponse> {
    // There would be a call to the API to populate this.setAmountOfData
    let filteredData = this.transformData(this.lotsOfData);

    // let apiRequest = event.map((requestData) => {
    //   requestData.pageSize = event['rows'];
    // });

    if (event !== undefined) {
      return Promise.resolve(
            this.buildReportData(filteredData.slice(event.first, (event.first + event.rows)), this.setAmountOfData.length)
      );
    }
  }

  // reportData.length != totalCount in the case of serverside paging
  private buildReportData(reportData: IAPISvcData[], totalCount: number) {
    return {
        apiData: reportData,
        totalCount: totalCount
      };
  }

  getRandomData(): any {
    const numRows = this.random.getRandomInt(100, 200);
    return this.buildRandomData(numRows);
  }

  getRandomData2(): any {
    return this.buildRandomData(50);
  }

  transformData(data): IAPISvcData[] {
    let transformedData = data.map( (row: IAPISvcData) => {
      row.date = this.datePipe.transform(row.date, 'short');
      if (typeof row.transferSize === 'number') {
        row.transferSize = this.fileSizePipe.transform(row.transferSize, 0);
      } else if
      (typeof row.transferSize === 'string') {
        row.transferSize = this.fileSizePipe.transformString(row.transferSize, 0);
      }
      return row;
    });
    return transformedData;
  }

  buildRow() {
    let row = {
      date: this.random.getRandomTimestamp(),
      name: this.random.getRandomName(),
      assetId: this.random.getRandomInt(1, 1000000),
      transferSize: this.random.getRandomInt(0, 10000000000000)
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

