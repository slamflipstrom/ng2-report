import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { ReportHeaderComponent } from './report-header/report-header.component';
import { ReportGridComponent } from './report-grid/report-grid.component';
import { DataTableModule, PaginatorModule } from 'primeng/primeng';

import { PdfMakeService } from '../pdf-make/pdf-make.service';

@NgModule({
  imports: [
    CommonModule,
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
  ]
})
export class ReportModule { }
