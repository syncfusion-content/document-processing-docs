var sheet = [
    {
        rows: [
            {
                index: 0,
                cells: [{ index: 0, value: 'Seller Name', style: { fontWeight: "bold", textAlign: "center" } },
                { index: 1, value: 'Customer Id', style: { fontWeight: "bold", textAlign: "center" } },
                { index: 2, value: 'Customer Name', style: { fontWeight: "bold", textAlign: "center" } },
                { index: 3, value: 'Product Name', style: { fontWeight: "bold", textAlign: "center" } },
                { index: 4, value: 'Product Price', style: { fontWeight: "bold", textAlign: "center" } },
                { index: 5, value: 'Total Price', style: { fontWeight: "bold", textAlign: "center" } }]
            },
            {
                index: 1,
                cells: [{ index: 0, value: 'John' },
                { index: 1, value: '101' },
                { index: 2, value: 'Nash' },
                { index: 3, value: 'Digger' },
                { index: 4, value: '50000' },
                { index: 5, value: '1,45,000.00' }]
            },
            {
                index: 2,
                cells: [{ index: 0, value: 'Mike' },
                { index: 1, value: '25' },
                { index: 2, value: 'Jim' },
                { index: 3, value: 'Cherrypicker' },
                { index: 4, value: '45000' },
                { index: 5, value: '1,40,040.00' }]
            },
            {
                index: 3,
                cells: [{ index: 0, value: 'shane' },
                { index: 1, value: '35' },
                { index: 2, value: 'Sean' },
                { index: 3, value: 'Kango' },
                { index: 4, value: '35000' },
                { index: 5, value: '1,54,500.00' }]
            },
            {
                index: 4,
                cells: [{ index: 0, value: 'John' },
                { index: 1, value: '101' },
                { index: 2, value: 'Nash' },
                { index: 3, value: 'JCB' },
                { index: 4, value: '90000' },
                { index: 5, value: '1,00,095.00' }]
            }
        ],
        columns: [
            { width: 88, }, { width: 88 }, { width: 106 }, { width: 98 }, { width: 88 }, { width: 81 }
        ]
    },
    {
        name: 'PriceDetails',
    }
];

//Initialize the SpreadSheet control
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheet,
    created: function () {
        ////add Data validation to range.
        spreadsheet.addDataValidation({ type: 'Custom', value1: '=AND(B2>10, B2<100)' }, 'E2:E5');
        //Highlight Invalid Data.
        spreadsheet.addInvalidHighlight('E2:E5');
    }
});

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');

