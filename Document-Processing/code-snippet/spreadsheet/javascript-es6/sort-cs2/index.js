// Initialize the Spreadsheet component.

var sheet = [{
                ranges: [{ dataSource: defaultData }],
                columns: [{ width: 130 }, { width: 92 },{ width: 96}]
            }]
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheet,
    allowSorting: true,
    dataBound: function () {
            if (!spreadsheet.isOpen && spreadsheet.activeSheetIndex === 0) {
                spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:G1');
                 spreadsheet.sort({ containsHeader: true }, 'A1:H11');
            }
        },
        
    beforeSort: function (args) {
        //code here to handle sorting arguments.
    },
    sortComplete: function (args) {
        spreadsheet.selectRange(args.range);
        // code here.
    },
    });

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');

    
   

