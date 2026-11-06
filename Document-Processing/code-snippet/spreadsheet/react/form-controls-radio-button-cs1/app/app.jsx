import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, ColumnsDirective, ColumnDirective, FormControlsDirective, FormControlDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';

function App() {
    let spreadsheet;
    const boldRight = { fontWeight: 'bold', textAlign: 'right' };
    const bold = { fontWeight: 'bold' };
    const onCreated = () => {
        // Apply styles to the specified range in the active sheet.
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
        // Apply format to the specified range in the active sheet.
        spreadsheet.numberFormat('$#,##0.00', 'F2:F31');
        // The default format code for the date format is 'm/d/yyyy'.
        spreadsheet.numberFormat('m/d/yyyy', 'E2:E30');
    };
    return (
        <SpreadsheetComponent ref={(ssObj) => { spreadsheet = ssObj; }} created={onCreated.bind(this)}>
            <SheetsDirective>
                <SheetDirective name="Price Details">
                    <RangesDirective>
                        <RangeDirective dataSource={defaultData}></RangeDirective>
                    </RangesDirective>
                    <FormControlsDirective>
                        <FormControlDirective type="RadioButton" text="Radio Button 1" cellLink="G1" height={40} width={180} rowIndex={11} colIndex={0}></FormControlDirective>
                    </FormControlsDirective>
                    <RowsDirective>
                        <RowDirective index={30}>
                            <CellsDirective>
                                <CellDirective index={4} value="Total Amount:" style={boldRight}></CellDirective>
                                <CellDirective formula="=SUM(F2:F30)" style={bold}></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                    </RowsDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={180}></ColumnDirective>
                        <ColumnDirective width={130}></ColumnDirective>
                        <ColumnDirective width={130}></ColumnDirective>
                        <ColumnDirective width={180}></ColumnDirective>
                        <ColumnDirective width={130}></ColumnDirective>
                        <ColumnDirective width={120}></ColumnDirective>
                    </ColumnsDirective>
                </SheetDirective>
            </SheetsDirective>
        </SpreadsheetComponent>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);