// Initialize the Spreadsheet component.
var columns = [{ width: 100 }, { width: 100 },{ width: 100 , isReadOnly: true},
    { width: 100 }, { width: 100 },{ width: 100 }];

var fieldsOrder = ['Projected Cost', 'Actual Cost', 'Expense Type', 'Difference'];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData, fieldsOrder: fieldsOrder }], columns: columns}]
});

spreadsheet.appendTo('#spreadsheet');
