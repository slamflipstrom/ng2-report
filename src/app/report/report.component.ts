import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [ReportService]
})
export class ReportComponent implements OnInit {
  users: Object[];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getReportData();
  }

  getReportData(): void {
    this.users = this.reportService.getData();
  }

}
