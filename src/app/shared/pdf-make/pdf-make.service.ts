import { Injectable } from '@angular/core';

@Injectable()
export class PdfMakeService {

  generatePdf(records: any, fields: any, title: string) {
    let docDefinition = this.buildDocDefinition(records, fields, title);
    pdfMake.createPdf(docDefinition).open();
  }

  buildDocDefinition(records, fields, title) {
    let FIELDS = this.buildHeaderDef(fields);
    let DATA = this.buildDataDef(records, fields);

    DATA.unshift(FIELDS);

    let dd = {
      'pageOrientation': 'landscape',
      'pageSize': 'LETTER',
      'content': [
        {
          'alignment': 'justify',
          'columns': [
            {
              'alignment': 'left',
              'text': `${title} Report`,
              'style': 'headerStyle'
            }
          ]
        },
        {
          'style': 'tableStyle',
          'table': {
            'headerRows': 1,
            'widths': FIELDS.map(() => '*'),
            'body': DATA
          },
          'layout': 'lightHorizontalLines'
        }
      ],
      'styles': {
          'tableStyle': {
            'fontSize': 8,
            'bold': true,
            'margin': [
              0,
              0,
              0,
              0
            ]
          },
          'tableHeader': {
            'fontSize': 10,
            'bold': true
          },
          'headerStyle': {
            'fontSize': 14,
            'bold': true,
            'alignment': 'center',
            'margin': [
              0,
              5,
              0,
              0
            ]
          },
          'footerStyle': {
            'fontSize': 8,
            'bold': true,
            'alignment': 'center'
          },
          'defaultStyle': {
            'fontSize': 8,
            'bold': true,
            'alignment': 'center',
            'columnGap': 20
          }
        },
        'defaultStyle': {
        'fontSize': 11
      },
      'header': null
    };

    return dd;
  }


  buildHeaderDef(fields, alignment?) {
    // Iterate through each field's keys
    // Return the value of each key
    let results: Object[] = [];

    for (let i = 0; i < fields.length; i++) {
      let fieldData = {};
        fieldData = {text: fields[i].header, style: 'tableHeader', alignment: fields[i].styleClass};
        results.push(fieldData);
      }
      return results;
  }

    buildDataDef(records, fields) {
      // Iterate through each record's keys
      // Return the value of each key
      let results: any[] = [];
      const keys = Object.keys(records[0]);

      for (let i = 0; i < records.length; i++) {
        let cellData = [];
        for (let j = 0; j < keys.length; j++) {
          const currentProperty = keys[j];
          const currentValue = records[i][currentProperty];
          if (fields[j].type === 'number') {
            let text = currentValue.toString();
            cellData.push({text: text, alignment: 'right'});
          } else {
            cellData.push(currentValue);
          };
        }
        results.push(cellData);
      }
      return results;
    }
  }
