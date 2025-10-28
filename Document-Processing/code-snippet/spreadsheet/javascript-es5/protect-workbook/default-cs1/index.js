// Initialize the Spreadsheet component.
var columns = [{ width: 100 }, { width: 100 },{ width: 100},
    { width: 100 }];
let spreadsheet = new ej.spreadsheet.Spreadsheet({
    isProtected: true,
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns }],
    dataBound: function () {
                spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
                spreadsheet.cellFormat({ fontWeight: 'bold'}, 'A11:D11');
            }
});

spreadsheet.appendTo('#spreadsheet');

