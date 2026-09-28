import { Spreadsheet, SheetModel } from '@syncfusion/ej2-spreadsheet';

let sheets: SheetModel[] = [
    {
        name: 'Famous Quotes',
        columns: [{ width: 160 }, { width: 110 }, { width: 110 }, { width: 100 }, { width: 100 }, { width: 110 }],
        rows: [
            {
                cells: [{
                    value: 'Famous Quotes',
                    style: {
                        fontWeight: 'bold',
                        fontSize: '16pt'
                    }
                }]
            },
            {
                cells: [{
                    value: 'Success is the sum of small efforts repeated day after day.',
                    style: { fontSize: '14pt' }
                }]
            },
            {
                cells: [{
                    value: 'Quality is never an accident it is always the result of intelligent effort.',
                    style: { fontSize: '14pt' }
                }]
            },
            {
                cells: [{
                    value: 'The future depends on what you do today and how consistently you do it.',
                    style: { fontSize: '14pt' }
                }]
            },
            {
                cells: [{
                    value: 'Well organized information helps teams make better decisions and achieve goals.',
                    style: { fontSize: '14pt' }
                }]
            },
            {
                cells: [{
                    value: 'Great achievements are built through planning persistence and continuous improvement.',
                    style: { fontSize: '14pt' }
                }]
            }
        ]
    }
];

let spreadsheet: Spreadsheet = new Spreadsheet({ sheets: sheets });

spreadsheet.appendTo('#spreadsheet');
