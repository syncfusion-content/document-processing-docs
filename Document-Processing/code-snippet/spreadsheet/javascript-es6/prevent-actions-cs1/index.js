var sheets = [
    {
        name: 'Price Details',
        ranges: [{ dataSource: defaultData, startCell: 'A1' }],
        rows: [
            {
                height: 30
            }
        ],
        rowCount: 200,
        columns: [
            { width: 130 }, { width: 100 }, { width: 100 }
        ]
    }
];

// Columns to be prevented editing.
var readOnlyColumns = [0, 2];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    cellEdit: function (args) {
        var addressRange = ej.spreadsheet.getCellIndexes(args.address.split('!')[1]);
        // preventing cellEditing from the readOnly columns
        if (readOnlyColumns.includes(addressRange[1])) {
            args.cancel = true;
        }
    },
    actionBegin: function (args) {
        var address;
        if (args.action == "clipboard") {
            address = args.args.eventArgs.pastedRange;
        }
        else if (args.action == "autofill") {
            address = args.args.eventArgs.fillRange;
        }
        else if (args.action == "format" || args.action == "validation" || args.action == "conditionalFormat") {
            address = args.args.eventArgs.range;
        }
        else if (args.action == "cut") {
            address = args.args.copiedRange
        }
        if (address) {
            var addressRange = ej.spreadsheet.getRangeIndexes(address);
            var colStart = addressRange[1];
            var colEnd = addressRange[3];
            // preventing other actions from the readOnly columns
            for (var col = colStart; col <= colEnd; col++) {
                if (readOnlyColumns.includes(col)) {
                    if (args.args.action == "cut") {
                        args.args.cancel = true;
                    } else {
                        args.args.eventArgs.cancel = true;
                    }
                    break;
                }
            }
        }
    }
});

spreadsheet.appendTo('#spreadsheet');