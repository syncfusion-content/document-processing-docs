import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    const styles = { textAlign: 'center', fontWeight: 'bold', verticalAlign: 'middle', fontStyle: 'italic', fontSize: '15pt' };
    const cellStyle = { fontStyle: 'italic', fontWeight: 'bold' };
    const fontStyle = { fontWeight: 'bold', textAlign: 'right' };
    // Custom function to calculate percentage between two cell values.
    const calculatePercentage = (firstCell, secondCell) => {
        return Number(firstCell) / Number(secondCell);
    };
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A2:E2');
            spreadsheet.numberFormat('$#,##0', 'B3:D12');
            spreadsheet.numberFormat('0%', 'E3:E12');
            // Adding custom function for calculating the percentage between two cells.
            spreadsheet.addCustomFunction(calculatePercentage, 'PERCENTAGE');
            // Calculate percentage using custom added formula in E11 cell.
            spreadsheet.updateCell({ formula: '=PERCENTAGE(C11,D11)' }, 'E11');
            // Calculate expressions using computeExpression in E10 cell.
            spreadsheet.updateCell({ value: spreadsheet.computeExpression('C10/D10') }, 'E10');
            // Calculate custom formula values using computeExpression in E12 cell.
            spreadsheet.updateCell({ value: spreadsheet.computeExpression('=PERCENTAGE(C12,D12)') }, 'E12');
            // Calculate SUM (built-in) formula values using computeExpression in D12 cell.
            spreadsheet.updateCell({ value: spreadsheet.computeExpression('=SUM(D3:D11)') }, 'D12');
        }
    }, []);

    return (<div>
        <SpreadsheetComponent ref={spreadsheetRef} showSheetTabs={false} showRibbon={false}>
            <SheetsDirective>
                <SheetDirective>
                    <RowsDirective>
                        <RowDirective height={40} customHeight={true}>
                            <CellsDirective>
                                <CellDirective value={'Monthly Expense'} style={styles} colSpan={5}></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective height={30}></RowDirective>
                        <RowDirective index={11}>
                            <CellsDirective>
                                <CellDirective value={'Totals'} style={cellStyle}></CellDirective>
                                <CellDirective formula={'=SUM(B3:B11)'} ></CellDirective>
                                <CellDirective formula={'=SUM(C3:C11)'}></CellDirective>
                                <CellDirective formula={'=SUM(D3:D11)'}></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective index={1} value={'Number of Categories'} style={fontStyle} colSpan={2}></CellDirective>
                                <CellDirective formula={'=COUNTA(A3:A11)'} index={3}></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective index={1} value={'Average Spend'} style={fontStyle} colSpan={2}></CellDirective>
                                <CellDirective formula={'=AVERAGE(B3:B11)'} index={3} format={'$#,##0'}></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective index={1} value={'Min Spend'} style={fontStyle} colSpan={2}></CellDirective>
                                <CellDirective formula={"=MIN(B3:B11)"} index={3} format={'$#,##0'}></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                        <RowDirective>
                            <CellsDirective>
                                <CellDirective index={1} value={'Max Spend'} style={fontStyle} colSpan={2}></CellDirective>
                                <CellDirective formula={"=MAX(B3:B11)"} index={3} format={'$#,##0'}></CellDirective>
                            </CellsDirective>
                        </RowDirective>
                    </RowsDirective>
                    <RangesDirective>
                        <RangeDirective dataSource={data} startCell={"A2"}></RangeDirective>
                    </RangesDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={150}></ColumnDirective>
                        <ColumnDirective width={120}></ColumnDirective>
                        <ColumnDirective width={120}></ColumnDirective>
                        <ColumnDirective width={120}></ColumnDirective>
                        <ColumnDirective width={120}></ColumnDirective>
                        <ColumnDirective width={120}></ColumnDirective>
                    </ColumnsDirective>
                </SheetDirective>
            </SheetsDirective>
        </SpreadsheetComponent> </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);