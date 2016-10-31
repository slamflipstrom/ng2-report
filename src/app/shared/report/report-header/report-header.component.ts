import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() csvClicked = new EventEmitter<string>();

  ngOnInit() {
  }

  requestPDFExport() {
    console.log('export to PDF was clicked');
    this.pdfClicked.emit();
  }

  requestCSVExport() {
    console.log('export to CSV was clicked');
    this.csvClicked.emit();
  }

}
