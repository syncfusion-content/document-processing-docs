ej.base.enableRipple(true);

var sheets = [
            {
                name: 'Price Details',
                ranges: [{ dataSource: defaultData , startCell: 'A1' }],
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

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    autoFillSettings: { fillType: 'FillSeries', showFillOptions: true },
    created: function () {
             spreadsheet.cellFormat({ backgroundColor: '#357cd2', color: '#fff', fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
              spreadsheet.autoFill('D4:D11','D2:D3', 'Down','CopyCells');
             spreadsheet.autoFill('E4:E11','E2:E3','Down','FillSeries');
             spreadsheet.autoFill('B4:B11','B2:B3','Down','FillFormattingOnly');
             spreadsheet.autoFill('C4:C11','C2:C3','Down','FillWithoutFormatting');
    }
});

spreadsheet.appendTo('#spreadsheet');

document.getElementById("showfillbtn").addEventListener('click', updateSetting);

function updateSetting() {
    var showFillOptions = spreadsheet.autoFillSettings.showFillOptions;
    spreadsheet.autoFillSettings.showFillOptions = !showFillOptions;
}


