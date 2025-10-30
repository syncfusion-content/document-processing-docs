// Initialize the Spreadsheet component.

var columns = [
    {
        width: 130
    },
    {
        width: 92
    },
    {
        width: 96
    }
];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns }],
    selectionSettings: { mode: 'Multiple' },
    created: () => {
        spreadsheet.selectRange('B2:E6');
    }
});

 

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');

