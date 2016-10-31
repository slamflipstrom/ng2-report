import { IReportData, IAPISvc } from './index';

const API_DATA: IAPISvc[]  = [
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 15,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 4222,
    transferSize: 6
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 15,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 12,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 42226,
    transferSize: 25
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 15,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 15,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 4,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 101,
    transferSize: 2200500
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 19,
    transferSize: 55
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 6,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 1000,
    transferSize: 1000000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 7,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 800,
    transferSize: 250
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 9,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 561,
    transferSize: 2500
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 19,
    transferSize: 5
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 10,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 15,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 4222,
    transferSize: 6
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 15,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 12,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 42226,
    transferSize: 25
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 15,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 15,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 4,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 101,
    transferSize: 2200500
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 19,
    transferSize: 55
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 6,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 1000,
    transferSize: 1000000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 7,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 800,
    transferSize: 250
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 9,
    transferSize: 4000
  },
  {
    date: Date.now(),
    name: 'TEST',
    assetId: 561,
    transferSize: 2500
  }
];

export const CONFIG_DATA: IReportData = {
  title: 'Example',
  summary: 'This is the Example Report summary',
  APISvc: API_DATA,
  fields: [
      {
        field: 'date',
        header: 'Date',
        styleClass: 'dateColumn',
        type: 'date',
      },
      {
        field: 'name',
        header: 'Name',
        styleClass: ''
      },
      {
        field: 'assetId',
        header: 'ID',
        styleClass: 'right'
      },
      {
        field: 'transferSize',
        header: 'Size',
        styleClass: 'right'
      },
  ]};


