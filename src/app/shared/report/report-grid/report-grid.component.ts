import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PdfMakeService } from '../../pdf-make/pdf-make.service';

@Component({
  selector: 'report-grid',
  templateUrl: './report-grid.component.html',
  styleUrls: ['./report-grid.component.scss'],
  providers: []
})

export class ReportGridComponent {
  @Input() title: string;
  @Input() fields: any[];
  @Input() records: any[];
  @Output() rowDblClicked = new EventEmitter<string>();

  constructor(private pdfMakeService: PdfMakeService) { }

  assetInfo($event) {
    this.rowDblClicked.emit($event.data.assetId);
  }

  exportToPdf() {
    console.log('exporting to PDF!');
    let records =  this.records;
    let fields = this.fields;
    let title = this.title;
    this.pdfMakeService.generatePdf(records, fields, title);
  }

  exportToCsv() {
    console.log('exporting to CSV!');
    let records =  this.records;
  }

}
