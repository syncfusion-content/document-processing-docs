import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { CellStyleModel } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef(null);

    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            // Define the input range for dropdown
            spreadsheet.insertRange('H1:H5', 'H', false);
            
            // Set dropdown values in range H1:H5
            spreadsheet.getActiveSheet().setFormula('H1', 'Standard Delivery');
            spreadsheet.getActiveSheet().setFormula('H2', 'Express Delivery');
            spreadsheet.getActiveSheet().setFormula('H3', 'Priority Delivery');
            spreadsheet.getActiveSheet().setFormula('H4', 'Pickup at Store');
            spreadsheet.getActiveSheet().setFormula('H5', 'Digital Download');

            // Insert Drop Down form control with input range
            spreadsheet.addFormControl({
                type: 'DropDown',
                target: 'B2',
                name: 'deliveryDropdown',
                caption: 'Select Delivery',
                value: 'Standard Delivery',
                inputRange: '$H$1:$H$5',
                linkedCell: 'D2',
                fontName: 'Calibri',
                fontSize: 14
            });

            // Define the input range for second dropdown
            spreadsheet.insertRange('I1:I4', 'I', false);
            
            // Set dropdown values for payment methods
            spreadsheet.getActiveSheet().setFormula('I1', 'Cash on Delivery');
            spreadsheet.getActiveSheet().setFormula('I2', 'Credit Card');
            spreadsheet.getActiveSheet().setFormula('I3', 'Debit Card');
            spreadsheet.getActiveSheet().setFormula('I4', 'Online Payment');

            // Insert second Drop Down form control
            spreadsheet.addFormControl({
                type: 'DropDown',
                target: 'B4',
                name: 'paymentDropdown',
                caption: 'Select Payment',
                value: 'Cash on Delivery',
                inputRange: '$I$1:$I$4',
                linkedCell: 'D4'
            });

            // Define the input range for priority dropdown
            spreadsheet.insertRange('J1:J3', 'J', false);
            
            // Set dropdown values for priority
            spreadsheet.getActiveSheet().setFormula('J1', 'Low');
            spreadsheet.getActiveSheet().setFormula('J2', 'Medium');
            spreadsheet.getActiveSheet().setFormula('J3', 'High');

            // Insert third Drop Down form control
            spreadsheet.addFormControl({
                type: 'DropDown',
                target: 'B6',
                name: 'priorityDropdown',
                caption: 'Select Priority',
                value: 'Medium',
                inputRange: '$J$1:$J$3',
                linkedCell: 'D6'
            });
        }
    }, []);

    const boldCenter = { fontWeight: 'bold', textAlign: 'center' };

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} showFormulaBar={false} allowFormControl={true}>
                <SheetsDirective>
                    <SheetDirective name={'DropDownDemo'}>
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

const root = createRoot(document.getElementById('root'));
root.render(<App />);