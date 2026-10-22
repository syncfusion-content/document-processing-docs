import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { CellStyleModel, FormControlModel } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

    const formControls: FormControlModel[] = [
        {
            type: 'DropDown',
            text: 'Select Delivery',
            cellLink: 'D2',
            listItems: 'Standard Delivery,Express Delivery,Priority Delivery,Pickup at Store,Digital Download',
            top: 40,
            left: 150,
            height: 30,
            width: 120
        },
        {
            type: 'DropDown',
            text: 'Select Payment',
            cellLink: 'D4',
            listItems: 'Cash on Delivery,Credit Card,Debit Card,Online Payment',
            top: 120,
            left: 150,
            height: 30,
            width: 120
        },
        {
            type: 'DropDown',
            text: 'Select Priority',
            cellLink: 'D6',
            listItems: 'Low,Medium,High',
            top: 200,
            left: 150,
            height: 30,
            width: 120
        }
    ];

    const boldCenter: CellStyleModel = { fontWeight: 'bold', textAlign: 'center' };

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} showFormulaBar={false} allowFormControl={true}>
                <SheetsDirective>
                    <SheetDirective name={'DropDownDemo'} formControls={formControls}>
                        <ColumnsDirective>
                            <ColumnDirective width={150}></ColumnDirective>
                            <ColumnDirective width={200}></ColumnDirective>
                            <ColumnDirective width={150}></ColumnDirective>
                            <ColumnDirective width={150}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={150}></ColumnDirective>
                            <ColumnDirective width={150}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                        </ColumnsDirective>
                        <RowsDirective>
                            <RowDirective index={0}>
                                <CellsDirective>
                                    <CellDirective index={0} value={'Drop Down Form Controls'} style={boldCenter}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={1}>
                                <CellsDirective>
                                    <CellDirective index={0} value={'Delivery Options'}></CellDirective>
                                    <CellDirective index={1} value={''}></CellDirective>
                                    <CellDirective index={2} value={'Selected Index'}></CellDirective>
                                    <CellDirective index={3} value={''}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={3}>
                                <CellsDirective>
                                    <CellDirective index={0} value={'Payment Method'}></CellDirective>
                                    <CellDirective index={1} value={''}></CellDirective>
                                    <CellDirective index={2} value={'Selected Index'}></CellDirective>
                                    <CellDirective index={3} value={''}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={5}>
                                <CellsDirective>
                                    <CellDirective index={0} value={'Priority Level'}></CellDirective>
                                    <CellDirective index={1} value={''}></CellDirective>
                                    <CellDirective index={2} value={'Selected Index'}></CellDirective>
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