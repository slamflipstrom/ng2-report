import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';
import { IReportData } from '../shared/mock-data';

@Component({
  selector: 'test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.scss'],
  providers: [ReportService]
})

export class TestReportComponent implements OnInit {

  reportData: IReportData;

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getReportData();
  }

  getReportData(): void {
    this.reportData = this.reportService.getData();
  }

}
