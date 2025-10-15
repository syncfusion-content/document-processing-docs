


import { Spreadsheet, SortDescriptor } from '@syncfusion/ej2-spreadsheet';
import { DataManager } from '@syncfusion/ej2-data';
import { tradeData } from './datasource.ts';

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ ranges: [{ dataSource: tradeData }] }],
    allowSorting: true,
    sortComplete: function (args) {
        spreadsheet.selectRange(args.range);
        // code here.
    },
    dataBound: function () {
    let sortDescriptors: SortDescriptor[] = [
        {
            field: 'F',
            order: 'Ascending'
        },
        {
            field: 'E',
            order: 'Ascending'
        },
        {
            field: 'C',
            order: 'Descending'
        }];
        if (spreadsheet.activeSheetIndex === 0) {
            spreadsheet.sort({ sortDescriptors: sortDescriptors, containsHeader: true }, 'A1:H30');
        }
    }
});
//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');


