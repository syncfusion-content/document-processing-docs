import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:E1');
            spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:A10');
            spreadsheet.cellFormat({ textAlign: 'center' }, 'C2:C10');
            spreadsheet.numberFormat('$#,##0.00', 'D2:D10');
            spreadsheet.numberFormat('$#,##0.00', 'E2:E11');
        }
    }, []);

    // Triggers before going to the editing mode.
    const onCellEdit = (args) => {
        // Preventing the editing in 5th(Amount) column.
        if (args.address.includes('E')) { args.cancel = true; }
    };
    // Trigger before saving the edited cell content.
    const onBeforeCellSave = (args) => {
        // Prevent saving the edited changes in 4th(Rate) column.
        if (args.address.includes('D')) {
            args.cancel = true;
            // Manually removes the editable state without saving the changes. Use `endEdit` method if you want to save the changes.
            let spreadsheet = spreadsheetRef.current;
            if (spreadsheet) {
                spreadsheet.closeEdit();
            }
        }
    };

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} showSheetTabs={false} cellEdit={onCellEdit} beforeCellSave={onBeforeCellSave} >
                <SheetsDirective>
                    <SheetDirective selectedRange={"C7"}>
                        <RowsDirective>
                            <RowDirective index={10}>
                                <CellsDirective>
                                    <CellDirective index={3} value={'Total Amount'} style={{ fontWeight: 'bold' }}></CellDirective>
                                    <CellDirective formula={'=SUM(E2:E10'}>
                                    </CellDirective>
                                </CellsDirective>
                            </RowDirective>
                        </RowsDirective>
                        <RangesDirective>
                            <RangeDirective dataSource={data}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={120} index={1}></ColumnDirective>
                            <ColumnDirective width={180}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={120}></ColumnDirective>
                            <ColumnDirective width={120}></ColumnDirective>
                        </ColumnsDirective>
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);