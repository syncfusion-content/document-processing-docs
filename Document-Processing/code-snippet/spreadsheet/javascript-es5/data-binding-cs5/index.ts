

import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

//Initialize the SpreadSheet control
let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [
        {
            name: 'Monthly Budget',
            selectedRange: 'D13',
            rows: [
                {
                    cells: [
                        { value: 'Category', style: { fontWeight: 'bold', textAlign: 'center' } },
                        { value: 'Planned cost', style: { fontWeight: 'bold', textAlign: 'center' } },
                        { value: 'Actual cost', style: { fontWeight: 'bold', textAlign: 'center' } },
                        { value: 'Difference', style: { fontWeight: 'bold', textAlign: 'center' } }
                    ]
                },
                {
                    cells: [
                        { value: 'Food' },
                        { value: '$7000' },
                        { value: '$8120' },
                        { formula: '=B2-C2', format: '$#,##0.00' }
                    ]
                },
                {
                    cells: [
                        { value: 'Loan' },
                        { value: '$1500' },
                        { value: '$1500' },
                        { formula: '=B3-C3', format: '$#,##0.00' }
                    ]
                },
                {
                    cells: [
                        { value: 'Medical' },
                        { value: '$300' },
                        { value: '$0' },
                        { formula: '=B4-C4', format: '$#,##0.00' }
                    ]
                },
                {
                    index: 5,
                    cells: [
                        { index: 2, value: 'Total Difference:', style: { fontWeight: 'bold', textAlign: 'right' } },
                        { formula: '=D2+D4', format: '$#,##0.00', style: { fontWeight: 'bold' } }
                    ]
                }
            ],
            columns: [
                { width: 110 }, { width: 115 }, { width: 110 }, { width: 100 }
            ]
        }
    ]
});

//Render the initialized SpreadSheet
spreadsheet.appendTo('#spreadsheet');


