import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SheetsDirective, SheetDirective, ColumnsDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RowsDirective, RowDirective, CellsDirective, CellDirective } from '@syncfusion/ej2-react-spreadsheet';
import { ColumnDirective, SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { imageData1, imageData2 } from './datasource'

function App() {
    const spreadsheetRef = React.useRef(null);
    const bottomStyle = { verticalAlign: 'bottom' };
    const topStyle = { verticalAlign: 'top' };
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.merge('B2:D2');
            spreadsheet.merge('B11:D11');
            spreadsheet.cellFormat({ fontWeight: 'bold', verticalAlign: 'middle', backgroundColor: '#1167b1', color: '#ffffff' }, 'B2');
            spreadsheet.cellFormat({ fontWeight: 'bold', verticalAlign: 'middle', backgroundColor: '#1167b1', color: '#ffffff' }, 'B11');
            spreadsheet.cellFormat({ fontWeight: 'bold' }, 'C3:C9');
            spreadsheet.cellFormat({ fontWeight: 'bold' }, 'C12:C18');
            spreadsheet.setBorder({ border: '1px solid #1167b1' }, 'B2:D9', 'Outer');
            spreadsheet.setBorder({ border: '1px solid #1167b1' }, 'B11:D18', 'Outer');
        }
    }, []);

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} showRibbon={false} showFormulaBar={false}>
                <SheetsDirective>
                    <SheetDirective selectedRange='B2' name='Employee Deatils' showGridLines={false}>
                        <RowsDirective>
                            <RowDirective index={1} height={30}>
                                <CellsDirective>
                                    <CellDirective index={1} value='   Mark'></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={2} height={40}>
                                <CellsDirective>
                                    <CellDirective index={2} value='Id' style={bottomStyle}></CellDirective>
                                    <CellDirective index={3} value=': 1001' style={bottomStyle}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={3}>
                                <CellsDirective>
                                    <CellDirective index={1} image={imageData1}></CellDirective>
                                    <CellDirective index={2} value='Gender'></CellDirective>
                                    <CellDirective index={3} value=': Male'></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={4}>
                                <CellsDirective>
                                    <CellDirective index={2} value='Contact Preference'></CellDirective>
                                    <CellDirective index={3} value=': Email'></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={5}>
                                <CellsDirective>
                                    <CellDirective index={2} value='Email'></CellDirective>
                                    <CellDirective index={3} value=': mark@gmail.com'></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={6}>
                                <CellsDirective>
                                    <CellDirective index={2} value='Date of Birth'></CellDirective>
                                    <CellDirective index={3} value=': Jan 3, 1985'></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={7}>
                                <CellsDirective>
                                    <CellDirective index={2} value='Department'></CellDirective>
                                    <CellDirective index={3} value=': IT'></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={8} height={40}>
                                <CellsDirective>
                                    <CellDirective index={2} value='IsActive' style={topStyle}></CellDirective>
                                    <CellDirective index={3} value=': True' style={topStyle}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={10} height={30}>
                                <CellsDirective>
                                    <CellDirective index={1} value='   Mary'></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={11} height={40}>
                                <CellsDirective>
                                    <CellDirective index={2} value='Id' style={bottomStyle}></CellDirective>
                                    <CellDirective index={3} value=': 1002' style={bottomStyle}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={12}>
                                <CellsDirective>
                                    <CellDirective index={1} image={imageData2}></CellDirective>
                                    <CellDirective index={2} value='Gender'></CellDirective>
                                    <CellDirective index={3} value=': Female'></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={13}>
                                <CellsDirective>
                                    <CellDirective index={2} value='Contact Preference'></CellDirective>
                                    <CellDirective index={3} value=': Phone'></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={14}>
                                <CellsDirective>
                                    <CellDirective index={2} value='Email'></CellDirective>
                                    <CellDirective index={3} value=': mary@gmail.com'></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={15}>
                                <CellsDirective>
                                    <CellDirective index={2} value='Date of Birth'></CellDirective>
                                    <CellDirective index={3} value=': Dec 8, 1989'></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={16}>
                                <CellsDirective>
                                    <CellDirective index={2} value='Department'></CellDirective>
                                    <CellDirective index={3} value=': HR'></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={17} height={40}>
                                <CellsDirective>
                                    <CellDirective index={2} value='IsActive' style={topStyle}></CellDirective>
                                    <CellDirective index={3} value=': True' style={topStyle}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                        </RowsDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={20}></ColumnDirective>
                            <ColumnDirective width={280}></ColumnDirective>
                            <ColumnDirective width={172}></ColumnDirective>
                            <ColumnDirective width={160}></ColumnDirective>
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