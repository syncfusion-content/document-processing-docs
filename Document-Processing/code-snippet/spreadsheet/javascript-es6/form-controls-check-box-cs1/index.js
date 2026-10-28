ej.base.enableRipple(true);

var columns = [{ width: 180 }, { width: 130 }, { width: 130 }, { width: 180 }, { width: 130 }, { width: 120 }, { width: 120 }];

var sheets = [{
    name: 'Price Details',
    ranges: [{ dataSource: defaultData }],
    columns: columns,
    formControls: [{
        type: 'CheckBox',
        text: 'Check Box 1',
        cellLink: 'G1',
        height: 40,
        width: 180
    }]
}];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    created: function () {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' },'A1:F1');
        spreadsheet.numberFormat('$#,##0.00', 'F2:F31');
        spreadsheet.numberFormat('m/d/yyyy', 'E2:E30');
    },
    showRibbon: false,
    showFormulaBar: false
});

spreadsheet.appendTo('#spreadsheet');