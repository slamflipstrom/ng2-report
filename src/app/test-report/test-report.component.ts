import { Component, OnInit } from '@angular/core';
import { ReportDataService } from '../core/report/report-data.service';
import { IReportData } from '../shared/interfaces';

@Component({
  selector: 'test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.scss'],
  providers: [ReportDataService]
})

export class TestReportComponent implements OnInit {

  reportData: IReportData;

  constructor(private reportService: ReportDataService) { }

  ngOnInit(): void {
    this.getReportData();
  }

  getReportData(): void {
    this.reportData = this.reportService.getData();
  }

}
