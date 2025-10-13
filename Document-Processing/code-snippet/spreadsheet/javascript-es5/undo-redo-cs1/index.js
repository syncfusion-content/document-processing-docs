// Initialize the Spreadsheet component.

var sheet = [{
    ranges: [{ dataSource: defaultData }],
    columns: [{ width: 130 }, { width: 92 }, { width: 96 }]
}];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheet,
    allowUndoRedo: true,
    actionComplete: function (args) {
        var actionEvents = args;
        if (actionEvents.eventArgs.action == "customCSS") {
            var Element = spreadsheet.getCell(actionEvents.eventArgs.rowIdx, actionEvents.eventArgs.colIdx);
            if (actionEvents.isUndoRedo && actionEvents.isUndo) {
                Element.classList.remove('customClass'); // To remove the custom class in undo action
            }
            else {
                Element.classList.add('customClass');// To add the custom class in redo action
            }
        }
    }
});

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');

document.getElementById("customBtn").addEventListener('click', updateCollection);

function updateCollection() {
    var cell = spreadsheet.getActiveSheet().activeCell;
    var cellIdx = ej.spreadsheet.getRangeIndexes(cell);
    var Element = spreadsheet.getCell(cellIdx[0], cellIdx[1]);
    if (!Element.classList.contains("customClass")) {
        Element.classList.add('customClass'); // To add the custom class in active cell element
        spreadsheet.updateUndoRedoCollection({ eventArgs: { class: 'customClass', rowIdx: cellIdx[0], colIdx: cellIdx[1], action: 'customCSS' } }); // To update the undo redo collection
    }
}

