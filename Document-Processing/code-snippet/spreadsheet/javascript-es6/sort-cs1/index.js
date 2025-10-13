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
        if (spreadsheet.activeSheetIndex === 0) {
             spreadsheet.sort({sortDescriptors: { field: 'F',  sortComparer: mySortComparer }, containsHeader: true}, 'A1:H20');
        }
    }
    });

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');

// custom sort comparer to sort based on the custom list.
var customList = ['Perfect', 'Sufficient', 'Insufficient'];
function mySortComparer(x,y) {
    var comparer = ej.data.DataUtil.fnSort('Ascending');
    return comparer(x ? customList.indexOf(x.value) : x, y ? customList.indexOf(y.value) : y);
};


