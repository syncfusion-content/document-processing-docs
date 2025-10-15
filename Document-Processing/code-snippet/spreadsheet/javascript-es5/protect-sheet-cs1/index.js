// Initialize the Spreadsheet component.
var columns = [{ width: 100 }, { width: 100 },{ width: 100},
    { width: 100 }];
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns,isProtected: true, protectSettings: {selectCells: true} },
                {name: 'Salary', ranges: [{ dataSource: salaryData }], columns: columns}],
    dataBound: function () {
                spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
                spreadsheet.cellFormat({ fontWeight: 'bold'}, 'A11:D11');
            }
});

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');

