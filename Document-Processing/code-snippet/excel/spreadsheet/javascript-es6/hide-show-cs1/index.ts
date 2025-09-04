

import { Spreadsheet, SheetModel, ColumnModel, RowModel } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Hiding the 1st and 2nd column index through property binding
let columns: ColumnModel[] = [{ width: 150 }, { width: 100, hidden: true }, { width: 100, hidden: true }, { width: 80 }, { width: 80 }, { width: 80 }, { width: 80 }, { width: 80 }];

// Hiding the 2nd and 3rd row index through property binding
let rows: RowModel[] = [{ index: 2, hidden: true }, { hidden: true }];

let sheets: SheetModel[] = [{ ranges: [{ dataSource: data }], columns: columns, rows: rows }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    created: (): void => {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        // Unhide the 2nd index hidden column
        spreadsheet.hideColumn(1, 1, false);
        // Unhide the 3rd index hidden row
        spreadsheet.hideRow(3, 3, false);
        // Hiding the 6th index column
        spreadsheet.hideColumn(6);
        // Hiding the 8th and 9th index row
        spreadsheet.hideRow(8, 9);
        spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:H11');
    },
    // Removed the unwanted support for this samples
    showRibbon: false, showFormulaBar: false, showSheetTabs: false
});

spreadsheet.appendTo('#spreadsheet');


