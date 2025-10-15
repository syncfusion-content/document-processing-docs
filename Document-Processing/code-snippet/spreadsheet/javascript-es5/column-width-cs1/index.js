ej.base.enableRipple(true);

var sheets = [{ ranges: [{ dataSource: data }] }];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    created: function () {
        // To change width of single column
        spreadsheet.setColumnsWidth(100, ['F']);
         // To change width of multiple columns
        spreadsheet.setColumnsWidth(120, ['A:C', 'G:I', 'K:M']);
    },
});

spreadsheet.appendTo('#spreadsheet');

