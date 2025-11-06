

import { Spreadsheet, SheetModel, ColumnModel, RowModel, getFormatFromType, BeforeChartEventArgs } from '@syncfusion/ej2-spreadsheet';
import { chartData } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let sheets: SheetModel[] = [
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
                    }
                ],
                columns: [
                    { width: 110 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }
                ]
            }
        ];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    created: function () {
             spreadsheet.cellFormat({ backgroundColor: '#357cd2', color: '#fff', fontWeight: 'bold', textAlign: 'center' }, 'A3:F3');
             spreadsheet.numberFormat(getFormatFromType('Currency'), 'B4:F8');
             spreadsheet.merge('A1:F1');
    },
    actionBegin: (args: BeforeChartEventArgs) => {
        if (args.action === 'beforeInsertChart' && args.args.eventArgs.type.includes('Line')) {
            args.args.eventArgs.markerSettings.shape = 'Triangle';
            args.args.eventArgs.markerSettings.isFilled = false;
            args.args.eventArgs.markerSettings.size = 10;
        }
    }
});

spreadsheet.appendTo('#spreadsheet');


