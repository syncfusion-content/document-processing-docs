var Spreadsheet = ej.spreadsheet.Spreadsheet;

var formControls = [
    // Shipping options group - linked to same cell (D2)
    {
        type: 'RadioButton',
        text: 'Standard Shipping',
        cellLink: 'D2',
        value: 'Unchecked',
        top: 40,
        left: 150,
        height: 20,
        width: 120
    },
    {
        type: 'RadioButton',
        text: 'Express Shipping',
        cellLink: 'D2',
        value: 'Unchecked',
        top: 70,
        left: 150,
        height: 20,
        width: 120
    },
    {
        type: 'RadioButton',
        text: 'Overnight Shipping',
        cellLink: 'D2',
        value: 'Unchecked',
        top: 100,
        left: 150,
        height: 20,
        width: 120
    },
    // Payment options group - linked to same cell (D4)
    {
        type: 'RadioButton',
        text: 'Credit Card',
        cellLink: 'D4',
        value: 'Unchecked',
        top: 160,
        left: 150,
        height: 20,
        width: 120
    },
    {
        type: 'RadioButton',
        text: 'Debit Card',
        cellLink: 'D4',
        value: 'Unchecked',
        top: 190,
        left: 150,
        height: 20,
        width: 120
    },
    {
        type: 'RadioButton',
        text: 'Wire Transfer',
        cellLink: 'D4',
        value: 'Unchecked',
        top: 220,
        left: 150,
        height: 20,
        width: 120
    }
];

var boldCenter = { fontWeight: 'bold', textAlign: 'center' };

var sheet = [
    {
        name: 'RadioButtonDemo',
        formControls: formControls,
        columns: [
            { width: 150 },
            { width: 180 },
            { width: 150 },
            { width: 150 }
        ],
        rows: [
            {
                index: 0,
                cells: [
                    { index: 0, value: 'Shipping Options', style: boldCenter }
                ]
            },
            {
                index: 1,
                cells: [
                    { index: 0, value: 'Select Shipping' },
                    { index: 1, value: '' },
                    { index: 2, value: 'Selected' },
                    { index: 3, value: '' }
                ]
            },
            {
                index: 5,
                cells: [
                    { index: 0, value: 'Payment Method', style: boldCenter }
                ]
            },
            {
                index: 6,
                cells: [
                    { index: 0, value: 'Choose Payment' },
                    { index: 1, value: '' },
                    { index: 2, value: 'Selected' },
                    { index: 3, value: '' }
                ]
            }
        ]
    }
];

var spreadsheet = new Spreadsheet({
    sheets: sheet,
    showFormulaBar: false,
    allowFormControl: true
});

spreadsheet.appendTo('#spreadsheet');
