import { ReportDataService } from './../../core/report/report-data.service';
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ReportGridComponent } from './report-grid/report-grid.component';
import { IColumnDefs, IReportData, IAPISvcData, IReportAPIRequest } from '../../index';


@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})

export class ReportComponent {
  @Input() title: string;
  @Input() summary: string;
  @Input() fields: any[];
  @Input() records: any[];
  @Input() config: any[];
  @Output() dataRequestedLazy: EventEmitter<any> = new EventEmitter<string>();

  constructor(private reportDataService:ReportDataService) {}

  @ViewChild(ReportGridComponent)

  private gridComponent: ReportGridComponent;

  viewAsset(assetId) {
    window.location.href = `/asset/${assetId}`;
  }

  getDataLazy($event) {
    console.log(2);
    this.dataRequestedLazy.emit($event);
  }

  requestGridExportPDF() {
    this.gridComponent.exportToPdf();
  }

  requestGridExportCSV() {
    this.gridComponent.exportToCsv();
  }
}
