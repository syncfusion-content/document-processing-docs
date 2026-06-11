
let sheet = [{
    ranges: [{ dataSource: defaultData }],
    columns: [
        { width: 180 }, { width: 130 }, { width: 130 }, { width: 180 },
        { width: 130 }, { width: 120 }
    ]
}];

let spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheet,
    created: function () {
        // Applies cell formatting to specified range of the active sheet
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
    }
});

spreadsheet.appendTo('#spreadsheet');

document.getElementById("getSelectedCellValues").onclick = () => {
    let sheet = spreadsheet.getActiveSheet();
    let selectedRange = sheet.selectedRange;
    let index = ej.spreadsheet.getRangeIndexes(selectedRange);
    let cellRange = ej.spreadsheet.getSwapRange(index);
    let swappedRange = ej.spreadsheet.getRangeAddress(cellRange);
    let valueObject = [];
    let range = sheet.name + '!' + swappedRange;
    // Get the collection of selected cell values by using the getData() method.
    spreadsheet.getData(range).then((cells) => {
      cells.forEach((cell) => {
        valueObject.push(ej.base.isNullOrUndefined(cell.value) ? '' : cell.value);
      });
      console.log("Collection of selected cell values:", valueObject);
    });
};