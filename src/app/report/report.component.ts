import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})

export class ReportComponent {
  @Input() title: string;
  @Input() summary: string;
  @Input() fields: any[];
  @Input() records: any[];

}
