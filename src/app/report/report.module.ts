import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { ReportHeaderComponent } from './report-header/report-header.component';
import { ReportGridComponent } from './report-grid/report-grid.component';
import { UiGridWrapperComponent } from './ui-grid-wrapper/ui-grid-wrapper.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReportComponent, ReportHeaderComponent, ReportGridComponent, UiGridWrapperComponent],
  exports: [ReportComponent]
})
export class ReportModule { }
