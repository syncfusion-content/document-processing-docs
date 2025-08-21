


import { Spreadsheet, ColumnModel, getRangeAddress } from '@syncfusion/ej2-spreadsheet';
import { budgetData} from './datasource.ts';

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
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns }],
    selectionSettings: { mode: 'Multiple' },
    created: (): void => {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:D1');
            let rowCount: number = spreadsheet.getActiveSheet().rowCount;
            spreadsheet.selectRange(getRangeAddress([0, 2, rowCount, 2]));
        }
});

//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');



