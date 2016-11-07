import { IColumnDefs, IReportData } from '../index';
import { Component, OnInit } from '@angular/core';
import { ReportDataService } from '../core/report/report-data.service';

@Component({
  selector: 'test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.scss'],
  providers: [ReportDataService]
})

export class TestReportComponent implements OnInit {

  columnDefs: IColumnDefs[];
  reportData: IReportData[];
  summary: string;
  title: string;

  constructor(private reportService: ReportDataService) { }

  ngOnInit(): void {
    this.getReportData();
  }

  getReportData(): void {
    this.columnDefs = this.getColumnDefs();
    this.reportData = this.reportService.getData();
    this.summary = 'This is the Test-Report summary';
    this.title = 'Test Report';
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
