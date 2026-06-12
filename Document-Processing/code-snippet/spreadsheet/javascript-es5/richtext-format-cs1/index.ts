import { Spreadsheet, SheetModel } from '@syncfusion/ej2-spreadsheet';

let sheets: SheetModel[] = [
    {
        columns: [{ width: 200 }],
        rows: [
            { cells: [{ value: 'Plain Text' }] },
            {
                cells: [
                    {
                        value: 'Mineral Water H2O',
                        richText: [
                            { text: 'Mineral Water H' },
                            { text: '2', style: { verticalAlign: 'sub' } },
                            { text: 'O' }
                        ]
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 'Energy Supplement C6H12O6',
                        richText: [
                            { text: 'Energy Supplement C' },
                            { text: '6', style: { verticalAlign: 'sub' } },
                            { text: 'H' },
                            { text: '12', style: { verticalAlign: 'sub' } },
                            { text: 'O' },
                            { text: '6', style: { verticalAlign: 'sub' } }
                        ]
                    }
                ]
            },
            { cells: [{ value: 'H2O' }] }
        ]
    }
];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    showFormulaBar: false,

    created: () => {
        if (spreadsheet) {
            // Update A4 with subscript H2O
            spreadsheet.updateCell(
                {
                    richText: [
                        { text: 'H' },
                        { text: '2', style: { verticalAlign: 'sub' } },
                        { text: 'O' }
                    ]
                },
                'A4'
            );

            // Update A5 with superscript
            spreadsheet.updateCell(
                {
                    value: 'X2',
                    richText: [
                        { text: 'X' },
                        { text: '2', style: { verticalAlign: 'super' } }
                    ]
                },
                'A5'
            );
        }
    }
});

spreadsheet.appendTo('#spreadsheet');
