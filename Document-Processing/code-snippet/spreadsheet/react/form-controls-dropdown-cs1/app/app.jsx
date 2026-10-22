import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { CellStyleModel } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef(null);

    const formControls = [
        {
            type: 'DropDown',
            text: 'Select Delivery',
            cellLink: 'D2',
            inputRange: 'H1:H5',
            selectedIndex: 0,
            top: 40,
            left: 150,
            height: 22,
            width: 120
        },
        {
            type: 'DropDown',
            text: 'Select Payment',
            cellLink: 'D4',
            inputRange: 'I1:I4',
            selectedIndex: 0,
            top: 100,
            left: 150,
            height: 22,
            width: 120
        },
        {
            type: 'DropDown',
            text: 'Select Priority',
            cellLink: 'D6',
            inputRange: 'J1:J3',
            selectedIndex: 1,
            top: 160,
            left: 150,
            height: 22,
            width: 120
        }
    ];

    const boldCenter = { fontWeight: 'bold', textAlign: 'center' };

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
                                    <CellDirective index={7} value={'Delivery Options'}></CellDirective>
                                    <CellDirective index={8} value={'Payment Methods'}></CellDirective>
                                    <CellDirective index={9} value={'Priority'}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={1}>
                                <CellsDirective>
                                    <CellDirective index={0} value={'Delivery Options'}></CellDirective>
                                    <CellDirective index={1} value={''}></CellDirective>
                                    <CellDirective index={2} value={'Selected Index'}></CellDirective>
                                    <CellDirective index={3} value={''}></CellDirective>
                                    <CellDirective index={7} value={'Standard Delivery'}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={2}>
                                <CellsDirective>
                                    <CellDirective index={7} value={'Express Delivery'}></CellDirective>
                                    <CellDirective index={8} value={'Cash on Delivery'}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={3}>
                                <CellsDirective>
                                    <CellDirective index={0} value={'Payment Method'}></CellDirective>
                                    <CellDirective index={1} value={''}></CellDirective>
                                    <CellDirective index={2} value={'Selected Index'}></CellDirective>
                                    <CellDirective index={3} value={''}></CellDirective>
                                    <CellDirective index={7} value={'Priority Delivery'}></CellDirective>
                                    <CellDirective index={8} value={'Credit Card'}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={4}>
                                <CellsDirective>
                                    <CellDirective index={7} value={'Pickup at Store'}></CellDirective>
                                    <CellDirective index={8} value={'Debit Card'}></CellDirective>
                                    <CellDirective index={9} value={'Medium'}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={5}>
                                <CellsDirective>
                                    <CellDirective index={0} value={'Priority Level'}></CellDirective>
                                    <CellDirective index={1} value={''}></CellDirective>
                                    <CellDirective index={2} value={'Selected Index'}></CellDirective>
                                    <CellDirective index={3} value={''}></CellDirective>
                                    <CellDirective index={7} value={'Digital Download'}></CellDirective>
                                    <CellDirective index={8} value={'Online Payment'}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                        </RowsDirective>
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);