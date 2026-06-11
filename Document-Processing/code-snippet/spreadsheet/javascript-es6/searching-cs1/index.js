// Initialize the Spreadsheet component.

var columns= [
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
    sheets: [{ ranges: [{ dataSource: defaultData }], columns: columns },
    { ranges: [{ dataSource: budgetData }], columns: columns }],
    allowFindAndReplace: true
});

 

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');

