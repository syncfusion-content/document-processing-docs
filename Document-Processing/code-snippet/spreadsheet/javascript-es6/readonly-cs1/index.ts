

import { Spreadsheet, ColumnModel, RowModel } from '@syncfusion/ej2-spreadsheet';
import { budgetData } from './datasource.ts';

let columns: ColumnModel[] = [{ width: 100 }, { width: 100 },{ width: 100 , isReadOnly: true},
    { width: 100 }, { width: 100 },{ width: 100 }];

let rows: RowModel[] = [{index:3,isReadOnly:true},{index:4, cells:[{index:5, isReadOnly: true}]},{}]

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], rows: rows, columns: columns}]
});
spreadsheet.appendTo('#spreadsheet');

// To make row 2 readonly.
document.getElementById('button1')!.onclick = (): void => {
    spreadsheet.setRangeReadOnly(true, '2:2', spreadsheet.activeSheetIndex);
}

// To make Column A readonly.
document.getElementById('button2')!.onclick = (): void => {
    spreadsheet.setRangeReadOnly(true, 'A:A', spreadsheet.activeSheetIndex);
}

// To make E5 cell readonly.
document.getElementById('button3')!.onclick = (): void => {
    spreadsheet.setRangeReadOnly(true, 'E5:E5', spreadsheet.activeSheetIndex);
}

// To remove readonly.
document.getElementById('button4')!.onclick = (): void => {
    spreadsheet.setRangeReadOnly(false, '2:2', spreadsheet.activeSheetIndex);
    spreadsheet.setRangeReadOnly(false, 'A:A', spreadsheet.activeSheetIndex);
    spreadsheet.setRangeReadOnly(false, 'E5:E5', spreadsheet.activeSheetIndex);
}
