export interface IReportData {
  title: string;
  summary: string;
  APISvc: IAPISvcData[];
  fields: IColumnDefs[];
}

export interface IAPISvcData {
  date?: IDate;
  name?: string;
  assetId?: number;
  transferSize?: number;
}

export interface IColumnDefs {
  // cellClass?: string;
  // cellFilter?: string;
  // cellTemplate?: string;
  // cellTooltip?: string;
  // colspan?: string;
  // editable?: boolean;
  // expander?: boolean;
  field: string;
  // filter?: boolean;
  // filterMatchMode?: string;
  header: string;
  // headerTooltip?: string;
  // hidden?: string;
  // maxWidth?: number;
  // minWidth?: number;
  // rowspan?: string;
  // selectionMode?: string;
  // sortable?: any;
  // sortFunction?: any;
  styleClass?: string;
  type?: ITypeObject;
}

export interface ITypeObject {
  date?: Date;
  number?: number;
  string?: string;
}

export type IDate = Date | number | string
