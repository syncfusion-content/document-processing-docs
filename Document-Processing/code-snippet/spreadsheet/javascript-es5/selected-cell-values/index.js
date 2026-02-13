
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
    }
});

spreadsheet.appendTo('#spreadsheet');

document.getElementById("getSelectedCellValues").onclick = () => {
    var sheet = spreadsheet.getActiveSheet();
    var selectedRange = sheet.selectedRange;
    var index = ej.spreadsheet.getRangeIndexes(selectedRange);
    var cellRange = ej.spreadsheet.getSwapRange(index);
    var swappedRange = ej.spreadsheet.getRangeAddress(cellRange);
    var valueObject = [];
    var range = sheet.name + '!' + swappedRange;
    // Get the collection of selected cell values by using the getData() method.
    spreadsheet.getData(range).then((cells) => {
      cells.forEach((cell) => {
        valueObject.push(ej.base.isNullOrUndefined(cell.value) ? '' : cell.value);
      });
      console.log("Collection of selected cell values:", valueObject);
    });
};