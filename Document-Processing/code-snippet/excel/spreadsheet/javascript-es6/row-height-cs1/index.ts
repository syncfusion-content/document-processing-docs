

import { Spreadsheet, SheetModel, ColumnModel, RowModel } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let sheets: SheetModel[] = [{ ranges: [{ dataSource: data }] }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    created: (): void => {
        // To change height for single row
        spreadsheet.setRowsHeight(40, ['2']);
        // To change height for multiple rows
        spreadsheet.setRowsHeight(40, ['4:8', '10:12']);
    },
});

spreadsheet.appendTo('#spreadsheet');


