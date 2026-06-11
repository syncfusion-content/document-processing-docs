ej.base.enableRipple(true);

var sheets = [
            {
                name: 'Book Sales',
                ranges: [{ dataSource: chartData , startCell: 'A3' }],
                rows: [
                    {
                        height: 30,
                        cells: [
                            {
                                value: 'Book Sales 2016-2020',
                                style: {
                                    backgroundColor: '#357cd2', color: '#fff',
                                    fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle'
                                }
                            }
                        ]
                    },
                    {
                        cells: [
                            { index: 7, chart: [{ type: 'Column', range: 'A3:F8' }] }
                        ]
                    }
                ],
                columns: [
                    { width: 110 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }
                ]
            }
        ];

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: sheets,
    created: function () {
             spreadsheet.cellFormat({ backgroundColor: '#357cd2', color: '#fff', fontWeight: 'bold', textAlign: 'center' }, 'A3:F3');
             spreadsheet.numberFormat(ej.spreadsheet.getFormatFromType('Currency'), 'B4:F8');
             spreadsheet.merge('A1:F1');
    }
});

spreadsheet.appendTo('#spreadsheet');

