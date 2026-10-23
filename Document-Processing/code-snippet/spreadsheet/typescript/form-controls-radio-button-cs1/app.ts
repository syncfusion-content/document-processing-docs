

import { Spreadsheet, SheetModel, ColumnModel, RowModel, FormControlModel, CellStyleModel } from '@syncfusion/ej2-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let formControls: FormControlModel[] = [
    {
        type: 'RadioButton',
        text: 'Option 1',
        cellLink: 'D2',
        value: 'Unchecked',
        top: 40,
        left: 150,
        height: 20,
        width: 120
    },
    {
        type: 'RadioButton',
        text: 'Option 2',
        cellLink: 'D4',
        value: 'Unchecked',
        top: 80,
        left: 150,
        height: 20,
        width: 120
    },
    {
        type: 'RadioButton',
        text: 'Option 3',
        cellLink: 'D6',
        value: 'Unchecked',
        top: 120,
        left: 150,
        height: 20,
        width: 120
    }
];

let boldCenter: CellStyleModel = { fontWeight: 'bold', textAlign: 'center' };

let sheets: SheetModel[] = [
    {
        name: 'FormControls',
        columns: [
            { width: 150 },
            { width: 150 },
            { width: 150 },
            { width: 150 }
        ],
        rows: [
            {
                index: 0,
                cells: [
                    { index: 0, value: 'Form Controls Demo', style: boldCenter }
                ]
            },
            {
                index: 1,
                cells: [
                    { index: 0, value: 'Radio Button Control' },
                    { index: 1, value: '' },
                    { index: 2, value: 'Cell Link' },
                    { index: 3, value: '' }
                ]
            },
            {
                index: 3,
                cells: [
                    { index: 0, value: 'Option 2' },
                    { index: 1, value: '' },
                    { index: 2, value: 'Cell Link' },
                    { index: 3, value: '' }
                ]
            },
            {
                index: 5,
                cells: [
                    { index: 0, value: 'Option 3' },
                    { index: 1, value: '' },
                    { index: 2, value: 'Cell Link' },
                    { index: 3, value: '' }
                ]
            }
        ],
        formControls: formControls
    }
];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    allowFormControl: true,
    showFormulaBar: false
});

spreadsheet.appendTo('#spreadsheet');
