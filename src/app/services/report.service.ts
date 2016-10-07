import { Injectable } from '@angular/core';

const DATA: [{}] = [
  {id: 11, name: 'James'},
  {id: 12, name: 'Ernest'},
  {id: 13, name: 'Butch'},
  {id: 14, name: 'Dorthy'},
  {id: 15, name: 'Kristin'},
  {id: 16, name: 'Zeke'},
  {id: 17, name: 'Felipe'},
  {id: 18, name: 'Jonas'},
  {id: 19, name: 'Olivia'},
  {id: 20, name: 'Tracy'}
];

@Injectable()
export class ReportService {

  constructor() { }

  getData(): Object[] {
     return DATA;
  }
}


