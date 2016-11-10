import { Injectable } from '@angular/core';

@Injectable()
export class CsvExportService {


  // Download CSV
  downloadCsv(data: any, fields: any, filename: string) {
    let csvData = this.generateCsv(data, fields);
    let a = document.createElement('a');
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    let blob = new Blob([csvData], { type: 'text/csv' });
    let url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename + '.csv';
    // If you will any error in a.download then dont worry about this.
    a.click();
  }


  // convert Json to CSV data
  generateCsv(objArray: any, fields: any) {
    let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let fieldArray = typeof fields !== 'object' ? JSON.parse(fields) : fields;
    let str = '';
    let row = '';

    for (let i = 0; i < fields.length; i++) {
      //Now convert each value to string and comma-seprated
      row += fields[i].header + ',';
    }
    row = row.slice(0, -1);
    //append Label row with line break
    str += row + '\r\n';

    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (let index in array[i]) {
        if (line != '') line += ','
        line += '"'+array[i][index]+'"';
      }
      str += line + '\r\n';
    }
    return str;
  }
}
