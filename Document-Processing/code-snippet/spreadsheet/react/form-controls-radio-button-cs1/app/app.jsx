import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { CellStyleModel } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef(null);
    const boldCenter = { fontWeight: 'bold', textAlign: 'center' };

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} showFormulaBar={false} allowFormControl={true}>
                <SheetsDirective>
                    <SheetDirective name={'RadioButtonDemo'} formControls={formControls}>
                        <ColumnsDirective>
                            <ColumnDirective width={150}></ColumnDirective>
                            <ColumnDirective width={180}></ColumnDirective>
                            <ColumnDirective width={150}></ColumnDirective>
                            <ColumnDirective width={150}></ColumnDirective>
                        </ColumnsDirective>
                        <RowsDirective>
                            <RowDirective index={0}>
                                <CellsDirective>
                                    <CellDirective index={0} value={'Shipping Options'} style={boldCenter}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={1}>
                                <CellsDirective>
                                    <CellDirective index={0} value={'Select Shipping'}></CellDirective>
                                    <CellDirective index={1} value={''}></CellDirective>
                                    <CellDirective index={2} value={'Selected'}></CellDirective>
                                    <CellDirective index={3} value={''}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={5}>
                                <CellsDirective>
                                    <CellDirective index={0} value={'Payment Method'} style={boldCenter}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={6}>
                                <CellsDirective>
                                    <CellDirective index={0} value={'Choose Payment'}></CellDirective>
                                    <CellDirective index={1} value={''}></CellDirective>
                                    <CellDirective index={2} value={'Selected'}></CellDirective>
                                    <CellDirective index={3} value={''}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                        </RowsDirective>
                        <FormControlsDirective>
                            <FormControlDirective type="RadioButton" text="Radio Button 1" celllink="H4" height={40} width={110}></FormControlDirective>"
                        </FormControlsDirective>
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);