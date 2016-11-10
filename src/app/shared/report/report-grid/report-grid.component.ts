import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PdfMakeService } from '../../pdf-make/pdf-make.service';
import { CsvExportService } from '../../csv-export/csv-export.service';

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

  constructor(
    private pdfMakeService: PdfMakeService,
    private csvExportService: CsvExportService
  ) { }

  assetInfo($event) {
    this.rowDblClicked.emit($event.data.assetId);
  }

  exportToPdf() {
    this.pdfMakeService.generatePdf(this.records, this.fields, this.title);
  }

  exportToCsv() {
    this.csvExportService.downloadCsv(this.records, this.fields, this.title);
  }

}
