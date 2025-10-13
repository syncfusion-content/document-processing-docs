import { Spreadsheet, SheetModel } from '@syncfusion/ej2-spreadsheet';
import { defaultData, groupData } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let sheets: SheetModel[] = [
    {
        name: 'Car Sales Report',
        ranges: [{ dataSource: defaultData, startCell: 'A1' }],
        rows: [
            {
                index: 0,
                cells: [
                    {
                        index: 1,
                        value: 'Group Id'
                    }
                ]
            }
        ],
        columns: [
            { width: 130 }, { width: 100 }, { width: 100 }
        ]
    },
    {
        name: 'List Validation Source',
        ranges: [{ dataSource: groupData, startCell: 'A1' }],
        columns: [
            { width: 130 }, { width: 100 }, { width: 100 }
        ]
    }
];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    created: function () {
        // Apply styles to the specified range in the active sheet.
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:B1');
        //Pass the value1 as the reference of cell range to provide more values.
        spreadsheet.addDataValidation(
            {
                type: 'List',
                inCellDropDown: true,
                value1: '=List Validation source!$B$2:$B$41',
            },
            'B2:B30'
        );
    }
});

spreadsheet.appendTo('#spreadsheet');
