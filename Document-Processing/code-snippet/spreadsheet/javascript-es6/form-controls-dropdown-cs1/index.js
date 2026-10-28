ej.base.enableRipple(true);

var formControls = [
    {
        type: 'DropDown',
        text: 'Select Delivery',
        cellLink: 'D2',
        inputRange: 'H1:H5',
        selectedIndex: 0,
        top: 40,
        left: 150,
        height: 22,
        width: 120
    },
    {
        type: 'DropDown',
        text: 'Select Payment',
        cellLink: 'D4',
        inputRange: 'I1:I4',
        selectedIndex: 0,
        top: 100,
        left: 150,
        height: 22,
        width: 120
    },
    {
        type: 'DropDown',
        text: 'Select Priority',
        cellLink: 'D6',
        inputRange: 'J1:J3',
        selectedIndex: 1,
        top: 160,
        left: 150,
        height: 22,
        width: 120
    }
];

var boldCenter = { fontWeight: 'bold', textAlign: 'center' };

var sheets = [
    {
        name: 'DropDownDemo',
        formControls: formControls,
        columns: [
            { width: 150 },
            { width: 200 },
            { width: 150 },
            { width: 150 },
            { width: 100 },
            { width: 100 },
            { width: 100 },
            { width: 150 },
            { width: 150 },
            { width: 100 }
        ],
        rows: [
            {
                index: 0,
                cells: [
                    { index: 0, value: 'Drop Down Form Controls', style: boldCenter },
                    { index: 7, value: 'Delivery Options' },
                    { index: 8, value: 'Payment Methods' },
                    { index: 9, value: 'Priority' }
                ]
            },
            {
                index: 1,
                cells: [
                    { index: 0, value: 'Delivery Options' },
                    { index: 1, value: '' },
                    { index: 2, value: 'Selected Index' },
                    { index: 3, value: '' },
                    { index: 7, value: 'Standard Delivery' },
                    { index: 8, value: 'Cash on Delivery' },
                    { index: 9, value: 'Low' }
                ]
            },
            {
                index: 2,
                cells: [
                    { index: 7, value: 'Express Delivery' },
                    { index: 8, value: 'Credit Card' },
                    { index: 9, value: 'Medium' }
                ]
            },
            {
                index: 3,
                cells: [
                    { index: 0, value: 'Payment Method' },
                    { index: 1, value: '' },
                    { index: 2, value: 'Selected Index' },
                    { index: 3, value: '' },
                    { index: 7, value: 'Priority Delivery' },
                    { index: 8, value: 'Debit Card' },
                    { index: 9, value: 'High' }
                ]
            },
            {
                index: 4,
                cells: [
                    { index: 7, value: 'Pickup at Store' },
                    { index: 8, value: 'Online Payment' }
                ]
            },
            {
                index: 5,
                cells: [
                    { index: 0, value: 'Priority Level' },
                    { index: 1, value: '' },
                    { index: 2, value: 'Selected Index' },
                    { index: 3, value: '' },
                    { index: 7, value: 'Digital Download' }
                ]
            }
        ]
    }
];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    allowFormControl: true
});

spreadsheet.appendTo('#spreadsheet');
