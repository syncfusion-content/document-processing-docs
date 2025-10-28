


import { Spreadsheet, CellModel } from '@syncfusion/ej2-spreadsheet';
import { DataManager, DataUtil } from '@syncfusion/ej2-data';
import { tradeData } from './datasource.ts';

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ ranges: [{ dataSource: new DataManager(tradeData) }] }],
    dataBound: function () {
        if (spreadsheet.activeSheetIndex === 0) {
            spreadsheet.sort({sortDescriptors: { field: 'F',  sortComparer: mySortComparer }, containsHeader: true}, 'A1:H20');
        }
    },
    sortComplete: function (args) {
        spreadsheet.selectRange(args.range);
        // code here.
    }
});

// custom sort comparer to sort based on the custom list.
let customList: string[] = ['Perfect', 'Sufficient', 'Insufficient'];
function mySortComparer(x: CellModel, y: CellModel): number {
    let comparer: Function = DataUtil.fnSort('Ascending');
    return comparer(x ? customList.indexOf(x.value) : x, y ? customList.indexOf(y.value) : y);
};

//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');


