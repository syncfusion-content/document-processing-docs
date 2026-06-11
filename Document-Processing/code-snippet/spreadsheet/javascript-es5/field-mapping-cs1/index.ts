

import { Spreadsheet, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { budgetData } from './datasource.ts';


let fieldsOrder: string[] = ['Projected Cost', 'Actual Cost', 'Expense Type', 'Difference'];

let columns: ColumnModel[] = [{ width: 100 }, { width: 100 },{ width: 100 , isReadOnly: true},
    { width: 100 }, { width: 100 },{ width: 100 }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData, fieldsOrder: fieldsOrder }], columns: columns}]
});
spreadsheet.appendTo('#spreadsheet');
