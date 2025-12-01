import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective, getRangeIndexes } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    // Columns to be prevented editing.
    const readOnlyColumns = [0,2];

    const cellEdit = (args: any) =>{
        var addressRange = getRangeIndexes(args.address);
        // preventing cellEditing from the readOnly columns
        if (readOnlyColumns.includes(addressRange[1]) || readOnlyColumns.includes(addressRange[3])) {
            args.cancel = true;
        }
    }

    // Triggers whenever any action begins in spreadsheet. 
    const actionBegin = (args: any) =>{
        var address: any;
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
            var addressRange = getRangeIndexes(address);
            var colStart = addressRange[1];
            var colEnd = addressRange[3];
            // preventing other actions from the readOnly columns
            for (var col = colStart; col <= colEnd; col++) {
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

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} cellEdit={cellEdit} actionBegin={actionBegin}>
                <SheetsDirective>
                    <SheetDirective>
                        <RangesDirective>
                            <RangeDirective dataSource={data}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={130}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                        </ColumnsDirective>
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
