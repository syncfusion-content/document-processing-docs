

import { Spreadsheet, SheetModel, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let columns: ColumnModel[] = [{ width: 150 }, { width: 110 }, { width: 110 }, { width: 85 }, { width: 85 }, { width: 85 }, { width: 85 },
        { width: 85 }];

let sheets: SheetModel[] = [{
    name: 'Price Details',
    ranges: [{ dataSource: data }],
    columns: columns,
    // Hiding the gridlines in `Price Details` sheet
    showGridLines: false,
    // Hiding the headers in `Price Details` sheet
    showHeaders: false
}];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    created: (): void => {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:H11');
        // The gridlines have been removed to set border for the range of cells
        spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A1:H11');
    },
    // Removed the unwanted support for this samples
    showFormulaBar: false, showSheetTabs: false
});

spreadsheet.appendTo('#spreadsheet');


