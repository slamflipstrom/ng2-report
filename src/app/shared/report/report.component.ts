import { Component, Input, ViewChild } from '@angular/core';
import { ReportGridComponent } from './report-grid/report-grid.component';

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

  @ViewChild(ReportGridComponent)
  private gridComponent: ReportGridComponent;

  viewAsset(assetId) {
    window.location.href = `/asset/${assetId}`;
  }

  requestGridExportPDF() {
    console.log('grid export requested for PDF');
    this.gridComponent.exportToPdf();
  }

  requestGridExportCSV() {
    console.log('grid export requested for CSV');
    this.gridComponent.exportToCsv();
  }
}
