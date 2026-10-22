import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { CellStyleModel, FormControlModel } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

    const formControls: FormControlModel[] = [
        // Shipping options group - linked to same cell (D2)
        {
            type: 'RadioButton',
            text: 'Standard Shipping',
            cellLink: 'D2',
            value: 'Unchecked',
            top: 40,
            left: 150,
            height: 20,
            width: 120
        },
        {
            type: 'RadioButton',
            text: 'Express Shipping',
            cellLink: 'D2',
            value: 'Unchecked',
            top: 70,
            left: 150,
            height: 20,
            width: 120
        },
        {
            type: 'RadioButton',
            text: 'Overnight Shipping',
            cellLink: 'D2',
            value: 'Unchecked',
            top: 100,
            left: 150,
            height: 20,
            width: 120
        },
        // Payment options group - linked to same cell (D4)
        {
            type: 'RadioButton',
            text: 'Credit Card',
            cellLink: 'D4',
            value: 'Unchecked',
            top: 160,
            left: 150,
            height: 20,
            width: 120
        },
        {
            type: 'RadioButton',
            text: 'Debit Card',
            cellLink: 'D4',
            value: 'Unchecked',
            top: 190,
            left: 150,
            height: 20,
            width: 120
        },
        {
            type: 'RadioButton',
            text: 'Wire Transfer',
            cellLink: 'D4',
            value: 'Unchecked',
            top: 220,
            left: 150,
            height: 20,
            width: 120
        }
    ];

    const boldCenter: CellStyleModel = { fontWeight: 'bold', textAlign: 'center' };

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
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
        </div>
    );
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />);