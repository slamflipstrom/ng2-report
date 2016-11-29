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
    this.apiRequest = this.buildApiRequest(null);
  }

  requestServiceData($event) {
    this.reportDataService.getLazyData(this.buildApiRequest($event)).then((data) => {
      Object.assign(this.config.dataResponse, data)
    });
  }

  buildApiRequest($event): IReportAPIRequest {
    let apiRequest = {
      currentPage: 1,
      label: '',
      pageSize: this.config.numRows,
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

    return apiRequest;
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

