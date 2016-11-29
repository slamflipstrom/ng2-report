import { IReportConfig, IAPIDataResponse, IAPISvcData, ICplLazyLoadEvent } from './../../../interfaces';
import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { PdfMakeService } from '../../pdf-make/pdf-make.service';
import { CsvExportService } from '../../csv-export/csv-export.service';

@Component({
  selector: 'report-grid',
  templateUrl: './report-grid.component.html',
  styleUrls: ['./report-grid.component.scss'],
  providers: []
})

export class ReportGridComponent implements OnInit {

  @Input() config: IReportConfig;
  @Output() rowDblClicked: EventEmitter<any> = new EventEmitter<string>();
  @Output() dataRequestedLazy: EventEmitter<ICplLazyLoadEvent> = new EventEmitter<ICplLazyLoadEvent>();


  private globalFilter: string = '';

  constructor(
    private pdfMakeService: PdfMakeService,
    private csvExportService: CsvExportService
  ) { }

  assetInfo($event) {
    this.rowDblClicked.emit($event.data.assetId);
  }

  loadData($event) {
    console.log($event);
    $event.globalFilter = this.globalFilter;
    this.dataRequestedLazy.emit($event);
  }

  exportToPdf() {
    this.pdfMakeService.generatePdf(this.getGridData(), this.config.fields, this.config.title);
  }

  exportToCsv() {
    this.csvExportService.downloadCsv(this.getGridData(), this.config.fields, this.config.title);
  }

  ngOnInit() {

  }

  private getGridData(): IAPISvcData[] {
    return this.config.dataResponse.apiData;
  }

}
