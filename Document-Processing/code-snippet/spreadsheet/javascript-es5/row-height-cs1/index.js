ej.base.enableRipple(true);

var sheets = [{ ranges: [{ dataSource: data }], }];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    created: function () {
        spreadsheet.setRowsHeight(40, ['2']);
        // To change height for multiple rows
        spreadsheet.setRowsHeight(40, ['4:8', '10:12']);
    },
});

spreadsheet.appendTo('#spreadsheet');

