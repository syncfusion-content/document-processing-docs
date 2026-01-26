


import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { defaultData } from './datasource.ts';

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ ranges: [{ dataSource: defaultData }] }],
    allowSorting: true,
    beforeSort: function (args) {
        //code here to handle sorting arguments.
    },
    sortComplete: function (args) {
        spreadsheet.selectRange(args.range);
        // code here.
    },
    dataBound: function () {
        if (spreadsheet.activeSheetIndex === 0) {
            spreadsheet.sort({ containsHeader: true }, 'A1:H11');
        }
    }
});

//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');


