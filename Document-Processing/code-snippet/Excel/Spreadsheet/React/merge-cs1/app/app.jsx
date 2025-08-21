import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellsDirective, CellDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:S1');
            spreadsheet.numberFormat('h:mm AM/PM', 'C1:S1');
            spreadsheet.cellFormat({ verticalAlign: 'middle' }, 'A1:S11');
            // Merging the `K4:M4` cells using method
            spreadsheet.merge('K4:M4');
            // Merging the 5th and 6th row cells across 11th, 12th and 13th column
            spreadsheet.merge('K5:M6', 'Vertically');
            // Merging the 18th and 19th column cells across 2nd, 3rd and 4th row
            spreadsheet.merge('N4:O6', 'Horizontally');
        }
    }, []);

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} showFormulaBar={false}>
                <SheetsDirective>
                    <SheetDirective name={"Merge Cells"}>
                        <RowsDirective>
                            <RowDirective height={35}></RowDirective>
                            <RowDirective height={35}>
                                <CellsDirective>
                                    <CellDirective index={1} rowSpan={2}></CellDirective>
                                    <CellDirective colSpan={2}></CellDirective>
                                    <CellDirective index={6} colSpan={3}></CellDirective>
                                    <CellDirective index={10} rowSpan={2} colSpan={3}></CellDirective>
                                    <CellDirective index={13} colSpan={2}></CellDirective>
                                    <CellDirective index={17} colSpan={2}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective height={35}>
                                <CellsDirective>
                                    <CellDirective index={3} colSpan={3}></CellDirective>
                                    <CellDirective index={6} colSpan={4}></CellDirective>
                                    <CellDirective index={13} colSpan={3}></CellDirective>
                                    <CellDirective index={17} colSpan={2}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective height={35}>
                                <CellsDirective>
                                    <CellDirective index={2} colSpan={3}></CellDirective>
                                    <CellDirective index={5} colSpan={2}></CellDirective>
                                    <CellDirective index={7} colSpan={3}></CellDirective>
                                    <CellDirective index={15} colSpan={2}></CellDirective>
                                    <CellDirective index={17} colSpan={2}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective height={35}>
                                <CellsDirective>
                                    <CellDirective index={2} colSpan={3}></CellDirective>
                                    <CellDirective index={6} colSpan={4}></CellDirective>
                                    <CellDirective index={16} colSpan={2}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective height={35}>
                                <CellsDirective>
                                    <CellDirective index={2} colSpan={4}></CellDirective>
                                    <CellDirective index={7} colSpan={3}></CellDirective>
                                    <CellDirective index={15} colSpan={2}></CellDirective>
                                    <CellDirective index={17} colSpan={2}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                        </RowsDirective>
                        <RangesDirective>
                            <RangeDirective dataSource={data}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={90}></ColumnDirective>
                            <ColumnDirective width={150}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={120}></ColumnDirective>
                            <ColumnDirective width={120}></ColumnDirective>
                            <ColumnDirective width={120}></ColumnDirective>
                            <ColumnDirective width={120}></ColumnDirective>
                            <ColumnDirective width={120}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
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