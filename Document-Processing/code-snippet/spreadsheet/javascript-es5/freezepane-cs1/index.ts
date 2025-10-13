import { Spreadsheet, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { tradeData } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let columns: ColumnModel[] = [{ width: 180 }, { width: 180 }, { width: 180 },
{ width: 180 }, { width: 180 }, { width: 180 },
{ width: 180 }, { width: 180 }, { width: 180 }, { width: 180 }, { width: 180 }, { width: 180 }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{
        ranges: [{ dataSource: tradeData }], columns: columns,
        // Specifies the number of frozen rows
        frozenRows: 2,
        // Specifies the number of frozen columns
        frozenColumns: 2
    }],
});

spreadsheet.appendTo('#spreadsheet');
