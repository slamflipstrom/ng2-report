import { Injectable } from '@angular/core';

@Injectable()
export class PdfMakeService {

  constructor() { }

  generatePdf(records: any) {
    // this.buildDocDefition(records);
    let docDefinition = {
      content: [
        {
          table: {


            body: [
              [ 'First', 'Second', 'Third', 'The last one' ],
              [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
              [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
            ]
          }
        }
      ]
  };

    pdfMake.createPdf(docDefinition).open();
  }

  // buildDocDefition(records: any) {
  //   records.forEach( function (record) {
  //     console.log(record);
  //   });
  // }
}
