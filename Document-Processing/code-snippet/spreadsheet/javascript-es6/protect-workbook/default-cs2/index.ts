import { Spreadsheet, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { budgetData } from './datasource.ts';

let columns: ColumnModel[] = [{ width: 100 }, { width: 100 }, { width: 100 },
{ width: 100 }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    //To protect the workbook with password
    password: "syncfusion",
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns }],
    dataBound: function () {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
        spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A11:D11');
    }
});
spreadsheet.appendTo('#spreadsheet');
