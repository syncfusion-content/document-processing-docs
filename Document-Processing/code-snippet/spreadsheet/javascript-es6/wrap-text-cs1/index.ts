

import { Spreadsheet, SheetModel, ColumnModel, RowModel } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let columns: ColumnModel[] = [{ index: 1, width: 100 }, { width: 140 }, { width: 90 }, { width: 150 }, { width: 120 }, { width: 90 }, { width: 180 }];

// Set wrap text to H2 to H5 cells through cell binding
let rows: RowModel[] = [{ height: 30 }, { cells: [{ index: 7, wrap: true }] }, { cells: [{ index: 7, wrap: true }] }, { cells: [{ index: 7, wrap: true }] }, { cells: [{ index: 7, wrap: true }] }];

let sheets: SheetModel[] = [{ name: 'Movie List', ranges: [{ dataSource: data }], rows: rows, columns: columns }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    created: (): void => {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        spreadsheet.cellFormat({ verticalAlign: 'middle' }, 'A1:H5');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:B5');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:D5');
        // To wrap the cells from E2 to E5 range
        spreadsheet.wrap('E2:E5');
        // To unwrap the H3 cell
        spreadsheet.wrap('H3', false);
    },
    // Removed the unwanted support for this samples
    showFormulaBar: false
});

spreadsheet.appendTo('#spreadsheet');


