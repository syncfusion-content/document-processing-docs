

import { Spreadsheet, SheetModel, ColumnModel, RowModel, FormControlModel, CellStyleModel } from '@syncfusion/ej2-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let formControls: FormControlModel[] = [
    {
        type: 'ComboBox',
        text: 'Select Country',
        cellLink: 'D2',
        inputRange: 'H1:H11',
        top: 40,
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
            { width: 150 },
            { width: 50 },
            { width: 50 },
            { width: 50 },
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
                    { index: 0, value: 'Combo Box (Dropdown) Control' },
                    { index: 1, value: '' },
                    { index: 2, value: 'Cell Link' },
                    { index: 3, value: '' }
                ]
            },
            {
                index: 3,
                cells: [
                    { index: 0, value: 'Input Range' },
                    { index: 1, value: '' },
                    { index: 2, value: 'H1:H11' },
                    { index: 3, value: '' }
                ]
            }
        ],
        ranges: [
            {
                dataSource: [
                    { Country: 'USA' },
                    { Country: 'Canada' },
                    { Country: 'Mexico' },
                    { Country: 'Brazil' },
                    { Country: 'Germany' },
                    { Country: 'France' },
                    { Country: 'India' },
                    { Country: 'China' },
                    { Country: 'Japan' },
                    { Country: 'Australia' }
                ],
                startCell: 'H1'
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
