import { Component, OnInit } from '@angular/core';
import { IColumnDefs, IReportData, IAPISvcData, IReportAPIRequest } from '../index';
import { ReportDataService } from '../core/report/report-data.service';

@Component({
  selector: 'test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.scss'],
  providers: [ReportDataService]
})

export class TestReportComponent implements OnInit {
  columnDefs: IColumnDefs[];
  config: Object;
  reportData: IReportData[];
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

  constructor(
    private reportDataService: ReportDataService) { }

  ngOnInit(): void {
    this.getReportData();
  }

  getReportData(): void {
    this.columnDefs = this.getColumnDefs();
    this.config = this.getReportConfig();
    this.reportData = this.reportDataService.getData(this.config['lazy']);
    this.summary = 'This is the Test-Report summary';
    this.title = 'Test Report';
  }

  // This needs to be moved out of the class and into service or component
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
        styleClass: ''
      },
      {
        field: 'assetId',
        header: 'ID',
        styleClass: 'right'
      },
      {
        field: 'transferSize',
        header: 'Size',
        styleClass: 'right'
      },
    ]
  };

}
