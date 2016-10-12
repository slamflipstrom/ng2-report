import { Injectable } from '@angular/core';

const DATA: { title: string, summary: string, APISvc: string, fields: [{}] } = {
  title: 'Generic Report',
  summary: 'This is the Generic Report summary',
  APISvc: 'API_SVC',
  fields: [
    {
      minWidth: 100,
      field: 'date',
      displayName: 'Date',
      type: 'date',
      cellFilter: 'cpTimezone'
    },
    {
      minWidth: 50,
      maxWidth: 200,
      field: 'assetId',
      displayName: 'ID',
      cellClass: 'asset',
    },
    {
      minWidth: 50,
      maxWidth: 200,
      field: 'transferSize',
      displayName: 'Size',
      type: 'number',
      cellFilter: 'cpAssetSize',
      headerCellClass: 'text-right'
    }
  ]};

@Injectable()
export class ReportService {

  constructor() { }

  getData(): { title: string, summary: string, APISvc: string, fields: [{}] } {
     return DATA;
  }
}


