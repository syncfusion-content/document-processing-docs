

import { Spreadsheet, SheetModel, ColumnModel, RowModel, getFormatFromType } from '@syncfusion/ej2-spreadsheet';
import { Button } from '@syncfusion/ej2-buttons';
import { defaultData } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let sheets: SheetModel[] = [
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

let spreadsheet: Spreadsheet = new Spreadsheet({
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

var button: Button = new Button();
button.appendTo('#showfillbtn');

button.element.onclick = (): void => {
    var spreadsheetObj = document.getElementById("spreadsheet").ej2_instances[0];
    var showFillOptions = spreadsheetObj.autoFillSettings.showFillOptions;
    spreadsheetObj.autoFillSettings.showFillOptions = !showFillOptions; //To change whether fill options need to be shown or not.
};


