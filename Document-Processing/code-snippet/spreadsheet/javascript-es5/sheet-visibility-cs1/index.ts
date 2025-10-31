

import { Spreadsheet, SheetModel } from '@syncfusion/ej2-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';
import { data } from './datasource.ts';

enableRipple(true);

let sheets: SheetModel[] = [{
    name: 'Visible Sheet',
    ranges: [{ dataSource: data }],
    columns: [{ width: 150 }, { width: 110 }, { width: 110 }, { width: 85 }, { width: 85 }, { width: 85 }, { width: 85 },
        { width: 85 }],
    // By default, state is set as `visible`. We don’t  need to said it in the sample
    state: 'Visible'
},
{
    name: 'Very Hidden Sheet',
    ranges: [{ dataSource: data }],
    columns: [{ width: 150 }, { width: 110 }, { width: 110 }, { width: 85 }, { width: 85 }, { width: 85 }, { width: 85 },
        { width: 85 }],
    // Sets sheet state as `VeryHidden`. It can't be unhidden.
    state: 'VeryHidden'
},
{
    name: 'Hidden Sheet',
    ranges: [{ dataSource: data }],
    columns: [{ width: 150 }, { width: 110 }, { width: 110 }, { width: 85 }, { width: 85 }, { width: 85 }, { width: 85 },
        { width: 85 }],
    // Sets sheet state as `Hidden`. It can be unhidden dynamically.
    state: 'Hidden'
}];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    created: (): void => {
        // Applies style formatting to active visible sheet
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:H11');
        // Applies style formatting to active hidden sheet
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Hidden Sheet!A1:H1');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'Hidden Sheet!D2:H11');
    },
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
    // Removed the unwanted support for this samples
    showFormulaBar: false, showRibbon: false
});

spreadsheet.appendTo('#spreadsheet');


