ej.base.enableRipple(true);

var columns =  [{ index: 1, width: 100 }, { width: 140 }, { width: 90 }, { width: 150 }, { width: 120 }, { width: 90 }, { width: 180 }];

// Set wrap text to H2 to H5 cells through cell binding
var rows = [{ height: 30 }, { cells: [{ index: 7, wrap: true }] }, { cells: [{ index: 7, wrap: true }] }, { cells: [{ index: 7, wrap: true }] }, { cells: [{ index: 7, wrap: true }] }];

var sheets = [{ name: 'Movie List', ranges: [{ dataSource: data }], rows: rows, columns: columns }];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    created: function () {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        spreadsheet.cellFormat({ verticalAlign: 'middle' }, 'A1:H5');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:B5');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:D5');
        // To wrap the cells from E2 to E5 range
        spreadsheet.wrap('E2:E5');
        // To unwrap the H3 cell
        spreadsheet.wrap('H3', false);
    },
    // Removed the unwanted support for this samples
    showFormulaBar: false
});

spreadsheet.appendTo('#spreadsheet');

