import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';
import { IReportData } from '../shared/mock-data';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [ReportService]
})
export class ReportComponent implements OnInit {
  reportData: IReportData;

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getReportData();
  }

  getReportData(): void {
    this.reportData = this.reportService.getData();
  }
}
