import { FileSizePipe } from './../core/file-size.pipe';
import { IColumnDefs, IReportData, IAPISvcData } from '../index';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
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

  constructor(
    private reportService: ReportDataService,
    private datePipe: DatePipe,
    private fileSizePipe: FileSizePipe
  ) { }

  ngOnInit(): void {
    this.getReportData();
  }

  getReportData(): void {
    this.columnDefs = this.getColumnDefs();
    let rawReportData = this.reportService.getData();
    this.reportData = this.filterData(rawReportData);
    this.summary = 'This is the Test-Report summary';
    this.title = 'Test Report';
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
