export interface IReportData {
  title: string;
  summary: string;
  APISvc: IAPISvc[];
  fields: [{}];
}

export interface IAPISvc {
  date: number;
  assetId: number;
  transferSize: number;
}

const API_DATA: IAPISvc[]  = [
  {
    date: Date.now(),
    assetId: 15,
    transferSize: 4000
  },
  {
    date: Date.now(),
    assetId: 4222,
    transferSize: 6
  },
  {
    date: Date.now(),
    assetId: 19,
    transferSize: 125
  },
  {
    date: Date.now(),
    assetId: 12,
    transferSize: 4000
  },
  {
    date: Date.now(),
    assetId: 42226,
    transferSize: 25
  },
  {
    date: Date.now(),
    assetId: 12,
    transferSize: 4000
  },
  {
    date: Date.now(),
    assetId: 87,
    transferSize: 220000
  },
  {
    date: Date.now(),
    assetId: 4,
    transferSize: 4000
  },
  {
    date: Date.now(),
    assetId: 101,
    transferSize: 2200500
  },
  {
    date: Date.now(),
    assetId: 19,
    transferSize: 55
  },
  {
    date: Date.now(),
    assetId: 6,
    transferSize: 4000
  },
  {
    date: Date.now(),
    assetId: 1000,
    transferSize: 1000000
  },
  {
    date: Date.now(),
    assetId: 7,
    transferSize: 4000
  },
  {
    date: Date.now(),
    assetId: 800,
    transferSize: 250
  },
  {
    date: Date.now(),
    assetId: 9,
    transferSize: 4000
  },
  {
    date: Date.now(),
    assetId: 561,
    transferSize: 2500
  },
  {
    date: Date.now(),
    assetId: 19,
    transferSize: 5
  },
  {
    date: Date.now(),
    assetId: 10,
    transferSize: 4000
  },
  {
    date: Date.now(),
    assetId: 2,
    transferSize: 360
  },
  {
    date: Date.now(),
    assetId: 11,
    transferSize: 4000
  },
  {
    date: Date.now(),
    assetId: 20000,
    transferSize: 24000
  }
];

export const CONFIG_DATA: IReportData = {
  title: 'Generic Report',
  summary: 'This is the Generic Report summary',
  APISvc: API_DATA,
  fields: [
      {
        field: 'date',
        header: 'Date',
        styleClass: 'dateColumn'
      },
      {
        field: 'assetId',
        header: 'ID',
        styleClass: 'text-right'
      },
      {
        field: 'transferSize',
        header: 'Size',
        styleClass: 'text-right'
      },
  ]};


