import { Component, Input } from '@angular/core';

@Component({
  selector: 'report-grid',
  templateUrl: './report-grid.component.html',
  styleUrls: ['./report-grid.component.scss']
})
export class ReportGridComponent {
  @Input() fields: [{}];
}
