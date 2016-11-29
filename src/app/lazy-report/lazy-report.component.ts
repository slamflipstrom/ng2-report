import { ICplLazyLoadEvent } from './../interfaces';
import { Component, OnInit } from '@angular/core';
import { IColumnDefs, IReportConfig, IAPISvcData, IReportAPIRequest } from '../index';
import { ReportDataService } from '../core/report/report-data.service';

@Component({
  selector: 'app-lazy-report',
  templateUrl: './lazy-report.component.html',
  styles: [''],
  providers: [ReportDataService]
})

export class LazyReportComponent implements OnInit {
  config: IReportConfig;
  apiRequest: IReportAPIRequest;

  constructor(private reportDataService: ReportDataService) { }

  ngOnInit(): void {
    this.config = this.buildReportConfig();
    this.apiRequest = this.reportDataService.buildApiRequest(this.config, null);
  }

  requestServiceData($event: ICplLazyLoadEvent) {
    this.reportDataService.getLazyData(this.reportDataService.buildApiRequest(this.config, $event)).then((data) => {
      this.config.dataResponse = data;
    });
  }

  private buildReportConfig(): IReportConfig {
    return {
      title: 'Server Side Report',
      summary: 'This is the Test-Report summary that is server-side or lazy loaded.',
      numRows: 10,
      lazyLoaded: true,
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

