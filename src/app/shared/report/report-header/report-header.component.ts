import { Component, OnInit, Input } from '@angular/core';
// import { IDataGridHeader } from '../../index';

@Component({
  selector: 'report-header',
  templateUrl: './report-header.component.html',
  styleUrls: ['./report-header.component.scss']
})
export class ReportHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() summary: string;
  @Input() record_count: any[];


  ngOnInit() {
  }

}