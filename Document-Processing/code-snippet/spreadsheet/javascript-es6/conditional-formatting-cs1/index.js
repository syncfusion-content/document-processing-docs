ej.base.enableRipple(true);

var sheets = [{
     name: 'Car Sales Record',
     ranges: [{ dataSource: conditionalFormatData }],
     conditionalFormats: [
            { type: 'GreaterThan', cFColor: 'RedFT', value: '700', range: 'B2:B9' },
            { type: 'Bottom10Items', cFColor: 'YellowFT', value: '4', range: 'C2:C9' },
            { type: 'BlueDataBar', range: 'D2:D9' }
        ],
     columns: [{ width: 120 }]}];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    created: function () {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:N1');
        spreadsheet.conditionalFormat({ type: "RYGColorScale", range: 'E2:E9' });
        spreadsheet.conditionalFormat({ type: "ThreeArrows", range: 'H2:H9' });
        //Custom format
        spreadsheet.conditionalFormat({ type: 'Top10Items', value: '1',
            format: { style: { color: '#ffffff', backgroundColor: '#009999', fontWeight: 'bold'}}, range: 'F2:F9' });
        spreadsheet.conditionalFormat({ type: 'Bottom10Items', value: '1',
            format: { style: { color: '#ffffff', backgroundColor: '#c68d53', fontWeight: 'bold'}}, range: 'G2:G9' }); 
    },
    // Removed the unwanted support for this samples
    showFormulaBar: false
});

spreadsheet.appendTo('#spreadsheet');

