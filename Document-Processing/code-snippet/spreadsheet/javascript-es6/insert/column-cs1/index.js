ej.base.enableRipple(true);

var columns =  [{ width: 90 }, { width: 220 }, { width: 90 }, { width: 140 }, { width: 100 }, { width: 100 }];

var sheets = [{ ranges: [{ dataSource: data, startCell: 'A2' }], columns: columns }];

// Cells model which we are going to update in the inserted 5th column dynamically
var cellsModel = [{ value: 'Unit Price', style: { fontWeight: 'bold', textAlign: 'center' } }, { value: '18.00' },
    { value: '19.00' }, { value: '10.00' }, { value: '22.00' }, { value: '21.35' }, { value: '25.00' }, { value: '30.00' },
    { value: '21.00' }, { value: '40.00' }, { value: '97.00' }];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    created: function () {
        // Applies style formatting before inserting the column
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A2:G2');
        // inserting a empty column at 0th index
        spreadsheet.insertColumn();
        // inserting 1 column at the 5th index with column model
        spreadsheet.insertColumn([{ index: 5, width: 90 }]);
        var rowIndex = 1;
        // Updating the 5th column data
        cellsModel.forEach(function (cell) {
            spreadsheet.updateCell(cell, ej.spreadsheet.getCellAddress(rowIndex, 5)); rowIndex++;
        });
        // Applies style formatting after the columns are inserted
        spreadsheet.cellFormat({ textAlign: 'center' }, 'B3:B12');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'D3:D12');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'F3:H12');
    },
    // Removed the unwanted support for this samples
    showRibbon: false, showFormulaBar: false, showSheetTabs: false
});

spreadsheet.appendTo('#spreadsheet');

