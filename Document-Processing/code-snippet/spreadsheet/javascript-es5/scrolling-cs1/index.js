var columns = [
    {
        width: 100
    },
    {
        width: 92
    },
    {
        width: 96
    },
    {
        width: 110
    },
    {
        width: 92
    },
    {
        width: 96
    },
    {
        width: 96
    }
];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: [{ name: 'Price Details', ranges: [{ dataSource: defaultData }], columns: columns, rowCount: 9, colCount: 7 }],
    allowScrolling: true,
    scrollSettings: { isFinite: true }
});

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');
