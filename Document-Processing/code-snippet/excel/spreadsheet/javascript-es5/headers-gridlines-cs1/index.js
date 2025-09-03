ej.base.enableRipple(true);

var columns = [{ width: 150 }, { width: 110 }, { width: 110 }, { width: 85 }, { width: 85 }, { width: 85 }, { width: 85 },
        { width: 85 }];

var sheets = [{
    name: 'Price Details',
    ranges: [{ dataSource: data }],
    columns: columns,
    // Hiding the gridlines in `Price Details` sheet
    showGridLines: false,
    // Hiding the headers in `Price Details` sheet
    showHeaders: false
}];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    created: function () {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:H11');
        // The gridlines has be removed, so setting border to range of cells.
        spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A1:H11');
    },
    // Removed the unwanted support for this samples
    showFormulaBar: false, showSheetTabs: false
});

spreadsheet.appendTo('#spreadsheet');

