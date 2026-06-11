
var sheet = [{
    ranges: [{ dataSource: defaultData }],
    columns: [
        { width: 180 }, { width: 130 }, { width: 130 }, { width: 180 },
        { width: 130 }, { width: 120 }
    ]
}];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheet,
    created: function () {
        // Applies cell formatting to specified range of the active sheet
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
        // Construct the predicate model to be updated to the data.
        var predicates = [{
            field: 'C',
            operator: 'equal',
            value: 'Pink',
            matchCase: false
        }];
        // Apply filter to the specified range.
        spreadsheet.applyFilter(predicates, 'A1:C7');
    }
});

spreadsheet.appendTo('#spreadsheet');

document.getElementById("getFilterData").onclick = function () {
    var activeSheet = spreadsheet.getActiveSheet();
    var usedRange = activeSheet.usedRange;
    for (var i = 0; i <= usedRange.rowIndex; i++) {
        // Get the filtered row using isFiltered property.
        var filteredRow = (activeSheet.rows[i]).isFiltered;
        if (!filteredRow) {
            var rowData = spreadsheet.getRowData(i);
            console.log("Row:", i + 1, "Cells", rowData);
        }
    }
};