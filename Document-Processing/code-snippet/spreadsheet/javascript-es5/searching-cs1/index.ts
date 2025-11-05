


import { Spreadsheet, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { defaultData, budgetData} from './datasource.ts';

let columns: ColumnModel[] = [
    {
        width: 130
    },
    {
        width: 92
    },
    {
        width: 96
    }
];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ name: 'Price Details', ranges: [{ dataSource: defaultData }], columns: columns },
    { name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns }],
    allowFindAndReplace: true
});

//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');



