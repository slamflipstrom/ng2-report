import { IReportAPIRequest, ICplLazyLoadEvent } from './../../interfaces';
import { DataTableModule } from 'primeng/primeng';
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

  getData(): Promise<IAPIDataResponse> {
    let filteredData = this.transformData(this.setAmountOfData);
    return Promise.resolve(
            this.buildReportData(filteredData, this.setAmountOfData.length)
    )
  }

  getLazyData(requestData: IReportAPIRequest): Promise<IAPIDataResponse> {
    // There would be a call to the API to populate this.setAmountOfData
    let transformedData = this.transformData(this.lotsOfData);

    //  The rest of this is here to mimic the server side api work
    //  basically we are just manipulating the array to pretend that the server is returning
    //  the correct amount of data

    const firstRow = (requestData.currentPage - 1) * requestData.pageSize;
    const numRowsToGet = requestData.pageSize;
    const totalSetOfRows = this.lotsOfData.length;

    return Promise.resolve(
            this.buildReportData(transformedData.slice(firstRow, (firstRow + numRowsToGet)), this.lotsOfData.length)
      );
  }

  buildApiRequest(config: IReportConfig, $event: ICplLazyLoadEvent): IReportAPIRequest {
    let apiRequest = {
      currentPage: 1,
      label: '',
      pageSize: config.numRows,
      searchTerm: '',
      sortOptions: {
        isAscending: true,
        sortOption: ''
      }
    };
    if ($event == null) {
      return apiRequest;
    }

    apiRequest.currentPage = ($event.first + $event.rows) / $event.rows;
    apiRequest.searchTerm = $event.globalFilter;

    return apiRequest;
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

