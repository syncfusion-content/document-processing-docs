

import { Spreadsheet, SheetModel, ColumnModel, RowModel } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let columns: ColumnModel[] = [{ width: 90 }, { width: 150 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 120 }, { width: 120 }, { width: 120 }, { width: 120 }, { width: 120 }, { width: 120 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }];

let rows: RowModel[] = [{ height: 35 }, { height: 35, cells: [
    // Merging the 2nd cells of rows 2 and 3 through cell binding.
    { index: 1, rowSpan: 2 },
    // Merging the 2nd row's 3rd and 4th cells through cell binding.
    { colSpan: 2 },
    // Merging the 2nd row's 7th, 8th and 9th cells through cell binding.
    { index: 6, colSpan: 3 },
    // Merging the 2nd and 3rd rows 11th, 12th and 13th cells through cell binding.
    { index: 10, rowSpan: 2, colSpan: 3 },
    { index: 13, colSpan: 2 }, { index: 17, colSpan: 2 } ] },
    { height: 35, cells: [{ index: 3, colSpan: 3 }, { index: 6, colSpan: 4 }, { index: 13, colSpan: 3 }, { index: 17, colSpan: 2 }] },
    { height: 35, cells: [{ index: 2, colSpan: 3 }, { index: 5, colSpan: 2 }, { index: 7, colSpan: 3 }, { index: 15, colSpan: 2 },
    { index: 17, colSpan: 2 }] }, { height: 35, cells: [{ index: 2, colSpan: 3 }, { index: 6, colSpan: 4 }, { index: 16, colSpan: 2 }] },
    { height: 35, cells: [{ index: 2, colSpan: 4 }, { index: 7, colSpan: 3 }, { index: 15, colSpan: 2 }, { index: 17, colSpan: 2 }] }];

let sheets: SheetModel[] = [{ name: 'Merge Cells', ranges: [{ dataSource: data }], columns: columns, rows: rows }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    created: (): void => {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:S1');
        spreadsheet.numberFormat('h:mm AM/PM', 'C1:S1');
        spreadsheet.cellFormat({ verticalAlign: 'middle' }, 'A1:S11');
        // Merging the `K4:M4` cells using method
        spreadsheet.merge('K4:M4');
        // Merging the 5th and 6th row cells across 11th, 12th and 13th column
        spreadsheet.merge('K5:M6', 'Vertically');
        // Merging the 18th and 19th column cells across 2nd, 3rd and 4th row
        spreadsheet.merge('N4:O6', 'Horizontally');
    },
    // Removed the unwanted support for this samples
    showFormulaBar: false
});

spreadsheet.appendTo('#spreadsheet');


