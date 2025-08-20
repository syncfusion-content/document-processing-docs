ej.base.enableRipple(true);

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: [{ ranges: [{ dataSource: tradeData,
    columns: [{ width: 180 }, { width: 180 },{ width: 180},
    { width: 180 }, { width: 180 },{ width: 180},
    { width: 180 }, { width: 180 },{ width: 180}, { width: 180 }, { width: 180 },{ width: 180}] }],
    // Specifies the number of frozen rows
    frozenRows: 2,
    // Specifies the number of frozen columns
    frozenColumns: 2
    }],
});

spreadsheet.appendTo('#spreadsheet');

