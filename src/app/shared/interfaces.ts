export interface IReportData {
  title: string;
  summary: string;
  APISvc: IAPISvc[];
  fields: IColumnDefs[];
}

export interface IAPISvc {
  date: number;
  assetId: number;
  transferSize: number;
}

export interface IColumnDefs {
  cellClass?: string;
  cellFilter?: string;
  cellTemplate?: string;
  cellTooltip?: string;
  colspan?: string;
  editable?: boolean;
  expander?: boolean;
  field: string;
  filter?: boolean;
  filterMatchMode?: string;
  header: string;
  headerTooltip?: string;
  hidden?: string;
  maxWidth?: number;
  minWidth?: number;
  rowspan?: string;
  selectionMode?: string;
  sortable?: any;
  sortFunction?: any;
  styleClass?: string;
  style?: string;
  type?: string;
}

// export interface IDataGrid {

// }

// export interface IDataGridHeader {

// }
