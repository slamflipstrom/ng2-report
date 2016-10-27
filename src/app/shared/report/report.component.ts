import { Component, Input } from '@angular/core';


@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})

export class ReportComponent {
  @Input() title: string;
  @Input() summary: string;
  @Input() fields: any[];
  @Input() records: any[];
  @Input() assetInfo: any;

  viewAsset(assetId) {
    window.location.href = `/asset/${assetId}`;
  }


}
