import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { ReportHeaderComponent } from './report-header/report-header.component';
import { ReportGridComponent } from './report-grid/report-grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReportComponent, ReportHeaderComponent, ReportGridComponent],
  exports: [ReportComponent]
})
export class ReportModule { }
