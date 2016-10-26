import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportModule } from './report/report.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [ReportModule],
  declarations: []
})
export class SharedModule { }
