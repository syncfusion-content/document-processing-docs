
import { Spreadsheet, ColumnModel, ExtendedRowModel, SheetModel, UsedRangeModel } from '@syncfusion/ej2-spreadsheet';
import { PredicateModel } from '@syncfusion/ej2-grids';
import { defaultData } from './datasource.ts';

let columns: ColumnModel[] = [
    { width: 180 }, { width: 130 }, { width: 130 }, { width: 180 },
    { width: 130 }, { width: 120 }
]

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ ranges: [{ dataSource: defaultData }], columns: columns }],
    created: function () {
        // Applies cell formatting to specified range of the active sheet
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
        // Construct the predicate model to be updated to the data.
        let predicates: PredicateModel[] = [{
            field: 'C',
            operator: 'equal',
            value: 'Pink',
            matchCase: false
        }];
        // Apply filter to the specified range.
        spreadsheet.applyFilter(predicates, 'A1:C7');
    }
});

spreadsheet.appendTo('#spreadsheet');

document.getElementById("getFilterData").onclick = () => {
    let activeSheet: SheetModel = spreadsheet.getActiveSheet();
    let usedRange: UsedRangeModel = activeSheet.usedRange;
    for (let i: number = 0; i <= usedRange.rowIndex; i++) {
        // Get the filtered row using isFiltered property.
        let filteredRow: Object = (activeSheet.rows[i] as ExtendedRowModel).isFiltered;
        if (!filteredRow) {
            let rowData: Object = spreadsheet.getRowData(i);
            console.log("Row:", i + 1, "Cells", rowData);
        }
    }
};
