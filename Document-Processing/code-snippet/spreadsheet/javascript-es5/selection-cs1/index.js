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
    created: function () {
        var colCount = spreadsheet.getActiveSheet().colCount;
        spreadsheet.selectRange(ej.spreadsheet.getRangeAddress([4, 0, 4, colCount]));
    }
});

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');
