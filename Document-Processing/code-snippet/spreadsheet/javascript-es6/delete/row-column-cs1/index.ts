

import { Spreadsheet, SheetModel, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let columns: ColumnModel[] = [{ width: 90 }, { width: 220 }, { width: 90 }, { width: 140 }, { width: 90 }, { width: 100 }, { width: 100 }];

let sheets: SheetModel[] = [{  name: 'Sheet1', ranges: [{ dataSource: data }], columns: columns }, { name: 'Sheet2', ranges: [{ dataSource: data }], columns: columns }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    allowDelete: true, // to enable or disable the delete option in Spreadsheet
    created: (): void => {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        // deleting the rows from 8th to 10th index. To delete row, the third argument of enum type is passed as 'Row', the last argument specifies the sheet name or index in which the delete operation will perform. By default,active sheet will be considered. It is applicable only for model type Row and Column.
        spreadsheet.delete(8, 10, 'Row', 0); // startIndex, endIndex, Row, sheet index
        // deleting the 2nd and 5th indexed columns
        spreadsheet.delete(2, 2, 'Column', 'Sheet2');
        spreadsheet.delete(5, 5, 'Column');
        spreadsheet.delete(0, 0, "Sheet"); // delete the first sheet. sheet index starts from 0
        // Applies style formatting after deleted the rows and columns
        spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:A8');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:G8');
    },
    // Removed the unwanted support for this samples
    showRibbon: false, showFormulaBar: false
});

spreadsheet.appendTo('#spreadsheet');


