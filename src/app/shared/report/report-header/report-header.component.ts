import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() pdfClicked = new EventEmitter<string>();

  ngOnInit() {
  }

  requestExport() {
    console.log('export to PDF was clicked');
    this.pdfClicked.emit();
  }

}
