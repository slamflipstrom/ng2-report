import { Component, OnInit } from '@angular/core';
import { IColumnDefs, IReportConfig, IAPISvcData, IReportAPIRequest } from '../index';
import { ReportDataService } from '../core/report/report-data.service';

@Component({
  selector: 'test-report',
  templateUrl: './test-report.component.html',
  styles: [],
  providers: [ReportDataService]
})

export class TestReportComponent implements OnInit {
  config: IReportConfig;

  constructor(private reportDataService: ReportDataService) { }

  ngOnInit(): void {
    this.getReportData();
    this.requestServiceData();
  }

  getReportData(): void {
    this.config = this.buildReportConfig();
    this.requestServiceData();
  }

  requestServiceData() {
    this.reportDataService.getData().then((data) => {
      Object.assign(this.config.dataResponse, data)
    });
  }

  private buildReportConfig(): IReportConfig {
    return {
      title: 'Test Report',
      summary: 'This is the Test-Report summary',
      numRows: 10,
      lazyLoaded: false,
      dataResponse: {
        apiData: [],
        totalCount: 0
      },
      fields: [
        {
          field: 'date',
          header: 'Date',
          styleClass: 'dateColumn',
          type: 'date',
        },
        {
          field: 'name',
          header: 'Name',
          styleClass: '',
          type: 'string'
        },
        {
          field: 'assetId',
          header: 'ID',
          styleClass: 'right',
          type: 'number'
        },
        {
          field: 'transferSize',
          header: 'Size',
          styleClass: 'right',
          type: 'number'
        },
      ]
    }
  }

}