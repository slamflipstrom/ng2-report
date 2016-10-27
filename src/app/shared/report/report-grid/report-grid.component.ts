import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'report-grid',
  templateUrl: './report-grid.component.html',
  styleUrls: ['./report-grid.component.scss']
})

export class ReportGridComponent implements OnInit {
  @Input() fields: any[];
  @Input() records: any[];


  ngOnInit() { }

  viewAsset($event) {
    window.location.href = '/asset/' + $event.data.assetId;
  }

}
