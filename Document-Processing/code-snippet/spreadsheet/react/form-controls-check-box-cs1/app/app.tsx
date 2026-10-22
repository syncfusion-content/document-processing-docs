import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { CellStyleModel, FormControlModel, SpreadsheetAllModule } from '@syncfusion/ej2-react-spreadsheet';

interface FormControlProps {
    ref: React.RefObject<SpreadsheetComponent>;
}

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

    const formControls: FormControlModel[] = [
        {
            type: 'CheckBox',
            text: 'Accept Terms',
            cellLink: 'D2',
            top: 40,
            left: 150,
            height: 30,
            width: 60
        },
        {
            type: 'CheckBox',
            text: 'Enable Notifications',
            cellLink: 'D4',
            top: 100,
            left: 150,
            height: 30,
            width: 60
        },
        {
            type: 'CheckBox',
            text: 'Select All Options',
            cellLink: 'D6',
            top: 160,
            left: 150,
            height: 30,
            width: 60
        }
    ];

    const boldCenter: CellStyleModel = { fontWeight: 'bold', textAlign: 'center' };

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} showFormulaBar={false} allowFormControl={true}>
                <SheetsDirective>
                    <SheetDirective name={'FormControls'} formControls={formControls}>
                        <ColumnsDirective>
                            <ColumnDirective width={150}></ColumnDirective>
                            <ColumnDirective width={150}></ColumnDirective>
                            <ColumnDirective width={150}></ColumnDirective>
                            <ColumnDirective width={150}></ColumnDirective>
                        </ColumnsDirective>
                        <RowsDirective>
                            <RowDirective index={0}>
                                <CellsDirective>
                                    <CellDirective index={0} value={'Form Controls Demo'} style={boldCenter}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={1}>
                                <CellsDirective>
                                    <CellDirective index={0} value={'Check Box Control'}></CellDirective>
                                    <CellDirective index={1} value={''}></CellDirective>
                                    <CellDirective index={2} value={'Cell Link'}></CellDirective>
                                    <CellDirective index={3} value={''}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={3}>
                                <CellsDirective>
                                    <CellDirective index={0} value={'Notifications'}></CellDirective>
                                    <CellDirective index={1} value={''}></CellDirective>
                                    <CellDirective index={2} value={'Cell Link'}></CellDirective>
                                    <CellDirective index={3} value={''}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={5}>
                                <CellsDirective>
                                    <CellDirective index={0} value={'Select All'}></CellDirective>
                                    <CellDirective index={1} value={''}></CellDirective>
                                    <CellDirective index={2} value={'Cell Link'}></CellDirective>
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