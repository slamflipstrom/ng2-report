import { Component, OnInit } from '@angular/core';
import { IColumnDefs, IReportConfig, IAPISvcData, IReportAPIRequest } from '../index';
import { ReportDataService } from '../core/report/report-data.service';

@Component({
  selector: 'app-lazy-report',
  templateUrl: './lazy-report.component.html',
  styleUrls: ['./lazy-report.component.scss'],
  providers: [ReportDataService]
})

export class LazyReportComponent implements OnInit {
  columnDefs: IColumnDefs[];
  config: Object;
  apiSvcData: IAPISvcData[] = [];
  recordCount: number;
  summary: string;
  title: string;
  requestData: IReportAPIRequest = {
    currentPage: 1,
    label: '',
    pageSize: 25,
    searchTerm: '',
    sortOptions: {
      isAscending: false,
      sortOption: undefined
    }
  }

  constructor(private reportDataService: ReportDataService) { }

  ngOnInit(): void {
    this.getReportData();
  }

  getReportData(): void {
    this.columnDefs = this.getColumnDefs();
    this.config = this.getReportConfig();
    this.summary = 'This is the Lazy-Report summary';
    this.title = 'Lazy Report';
  }

  requestServiceData(lazy, $event) {
    console.log(3);
    if ($event == null || $event == undefined) {return}
    this.reportDataService.getLazyData($event, this.requestData).then((data) => {
      this.apiSvcData = data.apiData;
      this.recordCount = data.totalCount;
    });
  }

  private getReportConfig(): Object {
    return {
      lazy: true
    }
  }

  private getColumnDefs(): IColumnDefs[] {
    return [
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
  };

}

