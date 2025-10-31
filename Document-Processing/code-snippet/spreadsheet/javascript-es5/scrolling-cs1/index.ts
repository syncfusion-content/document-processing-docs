


import { Spreadsheet, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { defaultData } from './datasource.ts';

let columns: ColumnModel[] = [
    {
        width: 100
    },
    {
        width: 92
    },
    {
        width: 96
    },
    {
        width: 110
    },
    {
        width: 92
    },
    {
        width: 96
    },
    {
        width: 96
    }
];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ name: 'Price Details', ranges: [{ dataSource: defaultData }], columns: columns, rowCount: 9, colCount: 7 }],
    allowScrolling: true,
    scrollSettings: { isFinite: true },
    created: (): void => {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:G1');
        }
});

//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');



