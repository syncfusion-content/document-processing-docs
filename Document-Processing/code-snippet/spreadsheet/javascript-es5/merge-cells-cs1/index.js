ej.base.enableRipple(true);

var columns =  [{ width: 90 }, { width: 150 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 },
    { width: 100 }, { width: 100 }, { width: 100 }, { width: 120 }, { width: 120 }, { width: 120 }, { width: 120 }, { width: 120 },
    { width: 120 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }];

var rows = [{ height: 35 }, { height: 35, cells: [
    // Merging the 2nd cells of rows 2 and 3 through cell binding.
    { index: 1, rowSpan: 2 },
    // Merging the 2nd row's 3rd and 4th cells a through cell binding.
    { colSpan: 2 },
    // Merging the 2nd row's 7th, 8th and 9th cells a through cell binding.
    { index: 6, colSpan: 3 },
    // Merging the 2nd and 3rd rows 11th, 12th and 13th cells a through cell binding.
    { index: 10, rowSpan: 2, colSpan: 3 },
    { index: 13, colSpan: 2 }, { index: 17, colSpan: 2 } ] },
    { height: 35, cells: [{ index: 3, colSpan: 3 }, { index: 6, colSpan: 4 }, { index: 13, colSpan: 3 }, { index: 17, colSpan: 2 }] },
    { height: 35, cells: [{ index: 2, colSpan: 3 }, { index: 5, colSpan: 2 }, { index: 7, colSpan: 3 }, { index: 15, colSpan: 2 },
    { index: 17, colSpan: 2 }] }, { height: 35, cells: [{ index: 2, colSpan: 3 }, { index: 6, colSpan: 4 }, { index: 16, colSpan: 2 }] },
    { height: 35, cells: [{ index: 2, colSpan: 4 }, { index: 7, colSpan: 3 }, { index: 15, colSpan: 2 }, { index: 17, colSpan: 2 }] }];

var sheets = [{ name: 'Merge Cells', ranges: [{ dataSource: data }], columns: columns, rows: rows }];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    created: function () {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:S1');
        spreadsheet.numberFormat('h:mm AM/PM', 'C1:S1');
        spreadsheet.cellFormat({ verticalAlign: 'middle' }, 'A1:S11');
        // Merging the `K4:M4` cells using method
        spreadsheet.merge('K4:M4');
        // Merging the 5th and 6th row cells across 11th, 12th and 13th column
        spreadsheet.merge('K5:M6', 'Vertically');
        // Merging the 18th and 19th column cells across 2nd, 3rd and 4th row
        spreadsheet.merge('N4:O6', 'Horizontally');
    },
    // Removed the unwanted support for this samples
    showFormulaBar: false
});

spreadsheet.appendTo('#spreadsheet');

