import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'report-header',
  templateUrl: './report-header.component.html',
  styleUrls: ['./report-header.component.scss']
})
export class ReportHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() summary: string;
  @Input() record_count: number;
  @Output() pdfClicked = new EventEmitter<string>();
  @Output() csvClicked = new EventEmitter<string>();

  ngOnInit() {
  }

  requestPDFExport() {
    this.pdfClicked.emit();
  }

  requestCSVExport() {
    this.csvClicked.emit();
  }

}
