import { Pipe, PipeTransform } from '@angular/core';

const UNITS = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

@Pipe({
  name: 'fileSizePipe'
})

export class FileSizePipe implements PipeTransform {


  transform(bytes: number, precision = 0): string {
    if ( bytes === 0 ) { return '0 bytes'; }
    if ( !isFinite( bytes ) ) { return '-'; }

    return this.byteFormat(bytes, precision);
  }

  transformString(bytes: string, precision = 0): string {
    if ( bytes === '0' ) { return '0 bytes'; }
    if ( isNaN(parseFloat(bytes))) { return '-'; }

    let converted_num = parseFloat(bytes);
    return this.byteFormat(converted_num, precision);
  }

  byteFormat(num: number, precision: number): string {
    let number = Math.floor(Math.log(num) / Math.log(1024));
    let val = (num / Math.pow(1024, Math.floor(number))).toFixed(precision);

    return  (val.match(/\.0*$/) ? val.substr(0, val.indexOf('.')) : val) +  ' ' + UNITS[number];
  }
}
