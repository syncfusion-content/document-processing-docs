import { Spreadsheet, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { budgetData, salaryData } from './datasource.ts';

let columns: ColumnModel[] = [{ width: 100 }, { width: 100 }, { width: 100 },
{ width: 100 }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns, isProtected: true, protectSettings: { selectCells: true } },
    { name: 'Salary', ranges: [{ dataSource: salaryData }], columns: columns }],
    dataBound: function () {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
        spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A11:D11');
        spreadsheet.protectSheet(1, { selectCells: false }, "syncfusion"); // protect sheet with password
    }
});

spreadsheet.appendTo('#spreadsheet');
