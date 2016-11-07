import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomService } from './random/random.service';
import { ReportDataService } from './report/report-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    RandomService,
    ReportDataService
  ]
})
export class CoreModule { }