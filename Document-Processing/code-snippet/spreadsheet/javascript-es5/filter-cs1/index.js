// Initialize the Spreadsheet component.
var sheet = [{
    ranges: [{ dataSource: tradeData }],
    columns: [{ width: 100 }, { width: 130 }, { width: 96 },
    { width: 130 }, { width: 130 }, { width: 96 },
    { width: 100 }, { width: 100 }, { width: 110 }, { width: 100 }, { width: 130 }, { width: 150 }]
}];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheet,
    allowFiltering: true,
    dataBound: function () {
        if (spreadsheet.activeSheetIndex === 0) {
            var departments = ['Sweden', 'Canada', 'UK'];
            var predicateList = []
            departments.forEach(function (department) { predicateList.push({ field: 'D', predicate: 'or', operator: 'equal', value: department }); })
            spreadsheet.applyFilter(predicateList);
        }
    }
});

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');