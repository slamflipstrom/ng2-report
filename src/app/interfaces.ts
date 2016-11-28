export interface IReportAPIRequest {
  currentPage: number;
  label: string;
  pageSize: number;
  searchTerm: string;
  sortOptions: SortOptionType;
}

export type SortOptionType = {
  isAscending: boolean;
  sortOption: any;
}

export interface IReportConfig {
  title: string;
  summary: string;
  lazyLoaded: boolean;
  fields: IColumnDefs[];
  dataResponse?: IAPIDataResponse;
}

export interface IAPIDataResponse {
  apiData: IAPISvcData[];
  totalCount: number;
  currentPage?: number;
  pageSize?: number;
  searchTerm?: string;
  sortOptions?: IAPISortOptions;
}

export interface IAPISortOptions {
  isAscending: boolean;
  sortOption: string;
}

export interface IAPISvcData {
  date?: DateType;
  name?: string;
  assetId?: number;
  transferSize?: number | string;
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

export type DateType = Date | number | string
