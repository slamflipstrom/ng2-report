import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'report-grid',
  templateUrl: './report-grid.component.html',
  styleUrls: ['./report-grid.component.scss']
})

export class ReportGridComponent implements OnInit {
  @Input() fields: any[];
  @Input() records: any[];
  @Output() rowDblClicked = new EventEmitter<string>();

  ngOnInit() { }

  assetInfo($event) {
    this.rowDblClicked.emit($event.data.assetId);
  }

}
