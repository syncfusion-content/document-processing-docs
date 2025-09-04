// Initialize the Spreadsheet component.

var sheet = [{
                ranges: [{ dataSource: tradeData }],
                columns: [{ width: 100 }, { width: 130 },{ width: 96},
                { width: 130 }, { width: 130 },{ width: 96},
                { width: 130 }, { width: 130 },{ width: 96}]
            }]
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheet,
    allowSorting: true,
    sortComplete: function (args) {
        spreadsheet.selectRange(args.range);
        // code here.
    },
    dataBound: function () {
    var sortDescriptors = [
        {
            field: 'F',
            order: 'Ascending'
        },
        {
            field: 'E',
            order: 'Ascending'
        },
        {
            field: 'C',
            order: 'Descending'
        }];
        if (spreadsheet.activeSheetIndex === 0) {
            spreadsheet.sort({ sortDescriptors: sortDescriptors, containsHeader: true }, 'A1:H30');
        }
    }
    });

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');


