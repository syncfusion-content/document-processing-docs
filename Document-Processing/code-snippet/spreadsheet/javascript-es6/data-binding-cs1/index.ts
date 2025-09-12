import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';

//Initialize the SpreadSheet control
let spreadsheet: Spreadsheet = new Spreadsheet({
  sheets: [{
    ranges: [{ dataSource: data }],
    columns: [{ width: 80 }, { width: 80 }, { width: 80 },
    { width: 160 }, { width: 100 }, { width: 150 }]
  }],
});

spreadsheet.appendTo('#spreadsheet');
