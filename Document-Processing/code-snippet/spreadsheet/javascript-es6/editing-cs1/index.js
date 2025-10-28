ej.base.enableRipple(true);

var columns =  [{ width: 120 }, { width: 180 }, { width: 100 }, { width: 120 }, { width: 120 }];

var rows = [{
    index: 10, cells: [{ index: 3, value: 'Total Amount:', style: { fontWeight: 'bold' } }, { formula: '=SUM(E2:E10)' }]
}];

var sheets = [{ ranges: [{ dataSource: data }], columns: columns, selectedRange: 'E11', rows: rows }];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    created: function () {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:E1');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:A10');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'C2:C10');
        spreadsheet.numberFormat('$#,##0.00', 'D2:D10');
        spreadsheet.numberFormat('$#,##0.00', 'E2:E11');

        // Manually starting the editable state using `startEdit` method in `C7`(current active) cell.
        spreadsheet.startEdit();
    },
    // Triggers before going to editing mode.
    cellEdit: function (args) {
        // Preventing the editing in 5th(Amount) column.
        if (args.address.includes('E')) { args.cancel = true; }
    },
    // Trigger before saving the edited cell content.
    beforeCellSave: function (args) {
        // Prevent saving the edited changes in 4th(Rate) column.
        if (args.address.includes('D')) {
            args.cancel = true;
            // Maually removes the editable state without saving the changes. Use `endEdit` method if you want to save the changes.
            spreadsheet.closeEdit();
        }
    },
    showSheetTabs: false, showRibbon: false
});

spreadsheet.appendTo('#spreadsheet');

