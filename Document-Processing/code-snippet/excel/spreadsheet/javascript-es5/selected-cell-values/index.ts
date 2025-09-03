
import { Spreadsheet, ColumnModel, SheetModel, cellModel, getRangeIndexes, getSwapRange, getRangeAddress } from '@syncfusion/ej2-spreadsheet';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
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
    }
});

spreadsheet.appendTo('#spreadsheet');

document.getElementById("getSelectedCellValues").onclick = () => {
    let sheet: SheetModel = spreadsheet.getActiveSheet();
    let selectedRange: string = sheet.selectedRange;
    let index: number[] = getRangeIndexes(selectedRange);
    let cellRange: number[] = getSwapRange(index);
    let swappedRange: string = getRangeAddress(cellRange);
    let valueObject: string[] = [];
    let range: string = sheet.name + '!' + swappedRange;
    // Get the collection of selected cell values by using the getData() method.
    spreadsheet.getData(range).then((cells: cellModel[]) => {
      cells.forEach((cell) => {
        valueObject.push(isNullOrUndefined(cell.value) ? '' : cell.value);
      });
      console.log("Collection of selected cell values:", valueObject);
    });
};
