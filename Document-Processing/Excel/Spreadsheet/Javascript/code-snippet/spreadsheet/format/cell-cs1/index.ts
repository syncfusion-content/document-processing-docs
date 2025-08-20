

import { Spreadsheet, SheetModel, ColumnModel, RowModel, CellStyleModel } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let columns: ColumnModel[] = [{ width: 100 }, { width: 200 }, { width: 110 }, { width: 140 }, { width: 90 }];

let rows: RowModel[] = [{
        height: 40, customHeight: true,
        cells: [{ value: 'Order Summary', colSpan: 5,
        // Applied styles to 'A1' cell through cell property binding
        style: { fontFamily: 'Axettac Demo', verticalAlign: 'middle', textAlign: 'center', fontSize: '18pt', fontWeight: 'bold', color: '#279377', border: '1px solid #e0e0e0' }
    }] },
    {
        // Applied styles to 'C2' cell through cell property binding
        height: 30, cells: [{ index: 2, style: { textAlign: 'right' } }]
    },
    { height: 30 }, { height: 30 }, { height: 30 }, { height: 30 }, { height: 30 },
    { height: 30 }, { height: 30 }, { height: 30 }, { height: 30 }, { height: 30 }];

let sheets: SheetModel[] = [{
    ranges: [{ dataSource: data, startCell: 'A2' }],
    columns: columns, rows: rows, showGridLines: false, selectedRange: 'U15'
}];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    // Applied cell formatting to the range of cells using 'cellFormat' method once the component is loaded
    created: (): void => {
        // Setting common styles to table header cells
        spreadsheet.cellFormat({ fontWeight: 'bold', fontSize: '12pt', backgroundColor: '#279377', color: '#ffffff' }, 'A2:E2');
        // Setting common styles to whole table cells
        spreadsheet.cellFormat({ verticalAlign: 'middle', fontFamily: 'Axettac Demo' }, 'A2:E12');
        // Column wise styles setting
        spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:A12');
        // Setting text-indent to 2 and 4 column
        let style: CellStyleModel = { textAlign: 'left', textIndent: '8pt' };
        spreadsheet.cellFormat(style, 'B2:B12');
        spreadsheet.cellFormat(style, 'D2:D12');
        spreadsheet.cellFormat({ fontStyle: 'italic', textAlign: 'right' }, 'C3:C12');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'E2:E12');
        // Applied border to range of cells using 'setBorder' method
        spreadsheet.setBorder({ borderLeft: '1px solid #e0e0e0', borderRight: '1px solid #e0e0e0' }, 'A2:E2');
        spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A4:E11', 'Horizontal');
        spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A3:E12', 'Outer');
        spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E3:E4');
        spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E9');
        spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E12');
        spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E5');
        spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E8');
        spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E11');
        spreadsheet.cellFormat({ color: '#62c9e8' }, 'E6');
        spreadsheet.cellFormat({ color: '#62c9e8' }, 'E10');
        spreadsheet.cellFormat({ color: '#ff5b5b' }, 'E7');
    },
    // Removed the unwanted support for this samples
    showRibbon: false, showFormulaBar: false, showSheetTabs: false, allowEditing: false, allowInsert: false, allowDelete: false
});

spreadsheet.appendTo('#spreadsheet');


