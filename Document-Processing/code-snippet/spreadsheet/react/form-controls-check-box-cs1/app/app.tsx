import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, ColumnsDirective, ColumnDirective, FormControlsDirective, FormControlDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-spreadsheet';
import { CellStyleModel } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';

function App(): React.ReactElement {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    const boldRight: CellStyleModel = {
        fontWeight: 'bold',
        textAlign: 'right'
    };
    const bold: CellStyleModel = {
        fontWeight: 'bold'
    };
    const onCreated = (): void => {
        const spreadsheet = spreadsheetRef.current;
        if (!spreadsheet) return;
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
        spreadsheet.numberFormat('$#,##0.00', 'F2:F31');
        spreadsheet.numberFormat('m/d/yyyy', 'E2:E30');
    };
    return (
        <SpreadsheetComponent ref={spreadsheetRef} created={onCreated} >
            <SheetsDirective>
                <SheetDirective name="Price Details">
                    <RangesDirective>
                        <RangeDirective dataSource={defaultData} />
                    </RangesDirective>
                    <FormControlsDirective>
                        <FormControlDirective type="CheckBox" text="Check Box 1" cellLink="G1" height={40} width={110} rowIndex={11} colIndex={0}></FormControlDirective>
                    </FormControlsDirective>
                    <RowsDirective>
                        <RowDirective index={30}>
                            <CellsDirective>
                                <CellDirective index={4} value="Total Amount:" style={boldRight} />
                                <CellDirective formula="=SUM(F2:F30)" style={bold} />
                            </CellsDirective>
                        </RowDirective>
                    </RowsDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={180} />
                        <ColumnDirective width={130} />
                        <ColumnDirective width={130} />
                        <ColumnDirective width={180} />
                        <ColumnDirective width={130} />
                        <ColumnDirective width={120} />
                    </ColumnsDirective>
                </SheetDirective>
            </SheetsDirective>
        </SpreadsheetComponent>
    );
}

export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);