import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'report-grid',
  templateUrl: './report-grid.component.html',
  styleUrls: ['./report-grid.component.scss']
})

export class ReportGridComponent implements OnInit {
  @Input() fields: any;
  @Input() records: any;

  reportData: any[];
  cols: any[];

  ngOnInit() {

    this.cols = [
      {field: 'date', header: 'Date'},
      {field: 'assetId', header: 'ID'},
      {field: 'transferSize', header: 'Size'},
    ];
  }
}
