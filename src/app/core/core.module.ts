import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RandomService } from './random/random.service';
import { ReportDataService } from './report/report-data.service';
import { FileSizePipe } from './file-size.pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    RandomService,
    ReportDataService,
    DatePipe,
    FileSizePipe
  ]
})
export class CoreModule { }
