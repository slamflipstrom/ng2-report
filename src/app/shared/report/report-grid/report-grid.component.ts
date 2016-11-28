import { IReportConfig, IAPIDataResponse, IAPISvcData } from './../../../interfaces';
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
  @Input() config: IReportConfig;
  @Output() rowDblClicked: EventEmitter<any> = new EventEmitter<string>();
  @Output() dataRequestedLazy: EventEmitter<any> = new EventEmitter<string>();

  constructor(
    private pdfMakeService: PdfMakeService,
    private csvExportService: CsvExportService
  ) { }

  assetInfo($event) {
    this.rowDblClicked.emit($event.data.assetId);
  }

  loadData($event) {
    console.log(1);
    this.dataRequestedLazy.emit($event);
  }

  exportToPdf() {
    this.pdfMakeService.generatePdf(this.getGridData(), this.config.fields, this.config.title);
  }

  exportToCsv() {
    this.csvExportService.downloadCsv(this.getGridData(), this.config.fields, this.config.title);
  }

  private getGridData(): IAPISvcData[] {
    return this.config.dataResponse.apiData;
  }

}
