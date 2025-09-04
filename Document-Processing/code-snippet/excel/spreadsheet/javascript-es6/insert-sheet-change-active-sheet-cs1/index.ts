
import { Spreadsheet, SheetModel, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { data, employeeData } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let columns: ColumnModel[] = [
    { width: 180 }, { width: 130 }, { width: 130 },
    { width: 180 }, { width: 130 }, { width: 120 }
];

let sheets: SheetModel[] = [{
    name: 'Car Sales Report',
    ranges: [{ dataSource: data }],
    columns: columns
}];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
});

spreadsheet.appendTo('#spreadsheet');

document.getElementById("insertSheet")!.onclick = () => {
    spreadsheet.insertSheet(
        [
            {
                index: 1,
                name: 'new_sheet',
                ranges: [
                    {
                        dataSource: employeeData,
                        startCell: 'A1'
                    },
                ],
                columns: columns,
            },
        ]
    );
    // Use the timeout function to wait until the sheet is inserted.
    setTimeout(() => {
        // Method for switching to a new sheet.
        spreadsheet.goTo('new_sheet!A1');
    })
};


