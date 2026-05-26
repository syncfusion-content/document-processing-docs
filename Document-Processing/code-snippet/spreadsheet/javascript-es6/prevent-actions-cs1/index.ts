

import { Spreadsheet, SheetModel, getCellIndexes, getRangeIndexes } from '@syncfusion/ej2-spreadsheet';
import { defaultData } from './datasource.ts';

let sheets: SheetModel[] = [
    {
        name: 'Price Details',
        ranges: [{ dataSource: defaultData, startCell: 'A1' }],
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

// Columns to be prevented editing.
let readOnlyColumns = [0, 2];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    cellEdit: (args: any) => {
        let addressRange = getCellIndexes(args.address.split('!')[1]);
        // preventing cellEditing from the readOnly columns
        if (readOnlyColumns.includes(addressRange[1])) {
            args.cancel = true;
        }
    },
    actionBegin: (args: any) => {
        let address;
        if (args.action == "clipboard") {
            address = args.args.eventArgs.pastedRange;
        }
        else if (args.action == "autofill") {
            address = args.args.eventArgs.fillRange;
        }
        else if (args.action == "format" || args.action == "validation" || args.action == "conditionalFormat") {
            address = args.args.eventArgs.range;
        }
        else if (args.action == "cut") {
            address = args.args.copiedRange
        }
        if (address) {
            let addressRange = getRangeIndexes(address);
            let colStart = addressRange[1];
            let colEnd = addressRange[3];
            // preventing other actions from the readOnly columns
            for (let col = colStart; col <= colEnd; col++) {
                if (readOnlyColumns.includes(col)) {
                    if (args.args.action == "cut") {
                        args.args.cancel = true;
                    } else {
                        args.args.eventArgs.cancel = true;
                    }
                    break;
                }
            }
        }
    }
});

spreadsheet.appendTo('#spreadsheet');