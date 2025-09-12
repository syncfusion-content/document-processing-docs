

import { Spreadsheet, SheetModel, ColumnModel, RowModel } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let sheets: SheetModel[] = [{ ranges: [{ dataSource: data }] }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    created: (): void => {
        // To change width of single column
        spreadsheet.setColumnsWidth(100, ['F']);
        // To change width of multiple columns
        spreadsheet.setColumnsWidth(120, ['A:C', 'G:I', 'K:M']);
    },
});

spreadsheet.appendTo('#spreadsheet');


