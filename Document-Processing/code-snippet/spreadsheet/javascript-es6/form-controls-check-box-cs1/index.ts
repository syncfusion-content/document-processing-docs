import { Spreadsheet, SheetModel, CellStyleModel, FormControlModel } from '@syncfusion/ej2-spreadsheet';

let formControls: FormControlModel[] = [
    {
        type: 'CheckBox',
        text: 'Accept Terms',
        cellLink: 'D2',
        value: 'Unchecked',
        top: 40,
        left: 150,
        height: 20,
        width: 120
    },
    {
        type: 'CheckBox',
        text: 'Enable Notifications',
        cellLink: 'D4',
        value: 'Unchecked',
        top: 80,
        left: 150,
        height: 20,
        width: 120
    },
    {
        type: 'CheckBox',
        text: 'Select All Options',
        cellLink: 'D6',
        value: 'Unchecked',
        top: 120,
        left: 150,
        height: 20,
        width: 120
    }
];

let boldCenter: CellStyleModel = { fontWeight: 'bold', textAlign: 'center' };

let sheet: SheetModel[] = [
    {
        name: 'FormControls',
        formControls: formControls,
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
                    { index: 0, value: 'Check Box Control' },
                    { index: 1, value: '' },
                    { index: 2, value: 'Cell Link' },
                    { index: 3, value: '' }
                ]
            },
            {
                index: 3,
                cells: [
                    { index: 0, value: 'Notifications' },
                    { index: 1, value: '' },
                    { index: 2, value: 'Cell Link' },
                    { index: 3, value: '' }
                ]
            },
            {
                index: 5,
                cells: [
                    { index: 0, value: 'Select All' },
                    { index: 1, value: '' },
                    { index: 2, value: 'Cell Link' },
                    { index: 3, value: '' }
                ]
            }
        ]
    }
];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheet,
    showFormulaBar: false,
    allowFormControl: true
});

spreadsheet.appendTo('#spreadsheet');
