import { Injectable } from '@angular/core';

const API_DATA: [{ date: number, assetId: number, transferSize: number }] = [
  {
    date: Date.now(),
    assetId: 12,
    transferSize: 4000
  },
  {
    date: Date.now(),
    assetId: 52,
    transferSize: 1000000
  },
  {
    date: Date.now(),
    assetId: 19,
    transferSize: 125
  },
];

const CONFIG_DATA: { title: string, summary: string, APISvc: [{ date: number, assetId: number, transferSize: number}], fields: [{}] } = {
  title: 'Generic Report',
  summary: 'This is the Generic Report summary',
  APISvc: API_DATA,
  fields: [
    {
      minWidth: 100,
      field: 'date',
      displayName: 'Date',
      type: 'date',
      cellFilter: 'cpTimezone'
    },
    {
      minWidth: 5,
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

  getData(): { title: string, summary: string, APISvc: [{ date: number, assetId: number, transferSize: number}], fields: [{}] } {
     return CONFIG_DATA;
  }
}

