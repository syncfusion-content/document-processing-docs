import { Spreadsheet, SheetModel, ColumnModel, FormControlModel } from '@syncfusion/ej2-spreadsheet';
import { defaultData } from './datasource';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let columns: ColumnModel[] = [{ width: 180 }, { width: 130 }, { width: 130 }, { width: 180 }, { width: 130 }, { width: 120 }, { width: 120 }];

let sheets: SheetModel[] = [{
    name: 'Price Details',
    ranges: [{ dataSource: defaultData }],
    columns: columns,
    formControls: <FormControlModel[]>[
        {
            type: 'DropDown',
            text: 'Drop Down 1',
            cellLink: 'G1',
            inputRange: "A1:A10",
            height: 40,
            width: 180
        }
    ]
}];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    created: (): void => {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
        spreadsheet.numberFormat('$#,##0.00', 'F2:F31');
        spreadsheet.numberFormat('m/d/yyyy', 'E2:E30');
    },
    showRibbon: false,
    showFormulaBar: false
});

spreadsheet.appendTo('#spreadsheet');