import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { CellStyleModel, FormControlModel } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            // Insert Radio Button form controls - Group 1
            spreadsheet.addFormControl({
                type: 'RadioButton',
                target: 'B2',
                name: 'shippingGroup',
                caption: 'Standard Shipping',
                value: 'standard',
                linkedCell: 'D2',
                fontName: 'Calibri',
                fontSize: 14
            } as FormControlModel);

            spreadsheet.addFormControl({
                type: 'RadioButton',
                target: 'B3',
                name: 'shippingGroup',
                caption: 'Express Shipping',
                value: 'express',
                linkedCell: 'D3'
            } as FormControlModel);

            spreadsheet.addFormControl({
                type: 'RadioButton',
                target: 'B4',
                name: 'shippingGroup',
                caption: 'Overnight Shipping',
                value: 'overnight',
                linkedCell: 'D4'
            } as FormControlModel);

            // Insert Radio Button form controls - Group 2
            spreadsheet.addFormControl({
                type: 'RadioButton',
                target: 'B6',
                name: 'paymentGroup',
                caption: 'Credit Card',
                value: 'creditcard',
                linkedCell: 'D6'
            } as FormControlModel);

            spreadsheet.addFormControl({
                type: 'RadioButton',
                target: 'B7',
                name: 'paymentGroup',
                caption: 'Debit Card',
                value: 'debitcard',
                linkedCell: 'D7'
            } as FormControlModel);

            spreadsheet.addFormControl({
                type: 'RadioButton',
                target: 'B8',
                name: 'paymentGroup',
                caption: 'Wire Transfer',
                value: 'transfer',
                linkedCell: 'D8'
            } as FormControlModel);
        }
    }, []);

    const boldCenter: CellStyleModel = { fontWeight: 'bold', textAlign: 'center' };

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} showFormulaBar={false} allowFormControl={true}>
                <SheetsDirective>
                    <SheetDirective name={'RadioButtonDemo'}>
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