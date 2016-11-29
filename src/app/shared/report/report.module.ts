import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { ReportHeaderComponent } from './report-header/report-header.component';
import { ReportGridComponent } from './report-grid/report-grid.component';
import { DataTableModule, PaginatorModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';

import { PdfMakeService } from '../pdf-make/pdf-make.service';
import { CsvExportService } from '../csv-export/csv-export.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    PaginatorModule
  ],
  declarations: [
    ReportComponent,
    ReportHeaderComponent,
    ReportGridComponent,
  ],
  exports: [ReportComponent],
  providers: [
    PdfMakeService,
    CsvExportService
  ]
})
export class ReportModule { }
