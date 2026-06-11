

import { Spreadsheet, SheetModel, ColumnModel, RowModel, getFormatFromType, NumberFormatType } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let columns: ColumnModel[] = [{ width: 140 }, { width: 140 }, { width: 160 }, { width: 160 }, { width: 160 }, { width: 120 }];

let rows: RowModel[] = [{
    height: 35, customHeight: true,
    cells: [{ value: 'Sales Team Summary', colSpan: 6,
    style: { verticalAlign: 'middle', textAlign: 'center', fontSize: '16pt', fontWeight: 'bold',
        border: '1px solid #e0e0e0', backgroundColor: '#EEEEEE', color: '#279377' }}]
},
{
    index: 10, cells: [{ index: 1, value: 'Total:', style: { fontWeight: 'bold', fontStyle: 'italic' } },
    // If the format string is not known, you can get the format string using `getFormatFromType` function like below
    { formula: '=SUM(C3:C10)', format: getFormatFromType(<NumberFormatType>'Accounting') },
    // Applied number format to C11, D11 & E11 through cell binding
    { formula: '=SUM(D3:D10)', format: '_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)' },
    { formula: '=SUM(E3:E10)', format: '_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)' }]
}];

let sheets: SheetModel[] = [{
    ranges: [{ dataSource: data, startCell: 'A2' }],
    columns: columns, rows: rows, showGridLines: false, selectedRange: 'U15'
}];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    // Applied number formatting to the range of cells using 'numberFormat' method once the component is loaded
    created: (): void => {
        spreadsheet.cellFormat({ fontWeight: 'bold', fontSize: '12pt', backgroundColor: '#279377', textAlign: 'center', color: '#ffffff', borderBottom: '1px solid #e0e0e0' }, 'A2:F2');
        spreadsheet.cellFormat({ borderTop: '1px solid #e0e0e0', backgroundColor: '#EEEEEE' }, 'A11:F11');
        spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A2:F11', 'Outer');
        // Applied Accounting format to the cells from C3 to E10 range.
        spreadsheet.numberFormat('_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)', 'C3:E10');
        // Applied Percentage format to the cells from C3 to E11 range.
        spreadsheet.numberFormat('0%', 'F3:F10');
        // applied the custom number format for cell form D3 to D10 range
        spreadsheet.numberFormat('[Red][<=2000]$#,##0.00;[Blue][>2000]$#,##0.00', 'D3:D10');
        // applied the custom number format for cell from F3 to F10 range
        spreadsheet.numberFormat('#,##0.00_);[Red](#,##0.00)', 'F3:F10');
    },
    // Removed the unwanted support for this samples
    showRibbon: false, showFormulaBar: false, showSheetTabs: false, allowInsert: false, allowDelete: false
});

spreadsheet.appendTo('#spreadsheet');


