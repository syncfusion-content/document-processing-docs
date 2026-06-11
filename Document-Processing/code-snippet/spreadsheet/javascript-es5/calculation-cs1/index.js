ej.base.enableRipple(true);

var columns =  [{ width: 130 }, { width: 92 }, { width: 96 }];


var sheets = [{ name: 'Product Details', ranges: [{ dataSource: data, startCell: 'A1' }], columns: columns }];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    calculationMode: 'Automatic',
    sheets: sheets,
    created: function () {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
    }
});

spreadsheet.appendTo('#spreadsheet');

