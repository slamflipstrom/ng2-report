import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PdfMakeService } from '../../../services/pdf-make/pdf-make.service';

@Component({
  selector: 'report-grid',
  templateUrl: './report-grid.component.html',
  styleUrls: ['./report-grid.component.scss'],
  providers: [PdfMakeService]
})

export class ReportGridComponent {
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
    this.pdfMakeService.generatePdf(records);
  }

}
