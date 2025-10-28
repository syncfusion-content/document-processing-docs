import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
            spreadsheet.cellFormat({ verticalAlign: 'middle' }, 'A1:H5');
            spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:B5');
            spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:D5');
            // To wrap the cells from E2 to E5 range
            spreadsheet.wrap('E2:E5');
            // To unwrap the H3 cell
            spreadsheet.wrap('H3', false);
        }
    }, []);

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} showFormulaBar={false} >
                <SheetsDirective>
                    <SheetDirective name={"Movie List"}>
                        <RowsDirective>
                            <RowDirective height={30}>
                            </RowDirective>
                            <RowDirective>
                                <CellsDirective>
                                    <CellDirective index={7} wrap={true}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective>
                                <CellsDirective>
                                    <CellDirective index={7} wrap={true}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective>
                                <CellsDirective>
                                    <CellDirective index={7} wrap={true}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective>
                                <CellsDirective>
                                    <CellDirective index={7} wrap={true}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                        </RowsDirective>
                        <RangesDirective>
                            <RangeDirective dataSource={data}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={100} index={1}></ColumnDirective>
                            <ColumnDirective width={140}></ColumnDirective>
                            <ColumnDirective width={90}></ColumnDirective>
                            <ColumnDirective width={150}></ColumnDirective>
                            <ColumnDirective width={120}></ColumnDirective>
                            <ColumnDirective width={90}></ColumnDirective>
                            <ColumnDirective width={180}></ColumnDirective>
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