

import { Spreadsheet, SheetModel, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let columns: ColumnModel[] = [{ width: 130 }, { width: 92 }, { width: 96 }];

let sheets: SheetModel[] = [{ name: 'Product Details', ranges: [{ dataSource: data, startCell: 'A1' }], columns: columns }];
let spreadsheet: Spreadsheet = new Spreadsheet({
    calculationMode: 'Automatic',
    sheets: sheets,
    created: function () {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
    }
});

spreadsheet.appendTo('#spreadsheet');


