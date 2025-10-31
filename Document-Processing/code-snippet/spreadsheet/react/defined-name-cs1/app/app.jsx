import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective, DefinedNamesDirective, DefinedNameDirective } from '@syncfusion/ej2-react-spreadsheet';
import { getComponent } from '@syncfusion/ej2-base';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    const styles = { textAlign: 'center', fontWeight: 'bold', verticalAlign: 'middle', fontStyle: 'italic', fontSize: '15pt' };
    const cellStyle = { fontStyle: 'italic', fontWeight: 'bold' };
    const fontStyle = { fontWeight: 'bold', textAlign: 'right' };
    const beforeDataBound = () => {
        let spreadsheetObj = getComponent(document.getElementById("spreadsheet"), "spreadsheet");
        // Adding name dynamically for `last year spending` and `percentage change` ranges.
        spreadsheetObj.addDefinedName({ name: 'LastYearSpendings', refersTo: '=D3:D11' });
        spreadsheetObj.addDefinedName({ name: 'PercentageChange', refersTo: '=E3:E11' });
    };
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            // Removing the unwanted `PercentageChange` named range
            spreadsheet.removeDefinedName('PercentageChange', '');
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A2:E2');
            spreadsheet.numberFormat('$#,##0', 'B3:D12');
            spreadsheet.numberFormat('0%', 'E3:E12');
        }
    }, []);

    return (
        <div>
            <SpreadsheetComponent id='spreadsheet' ref={spreadsheetRef} beforeDataBound={beforeDataBound} showSheetTabs={false} showRibbon={false}>
                <SheetsDirective>
                    <SheetDirective name={"Budget Details"}>
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
                                    <CellDirective formula={'=SUM(MonthlySpendings)'} ></CellDirective>
                                    <CellDirective formula={'=SUM(AnnualSpendings)'}></CellDirective>
                                    <CellDirective formula={'=SUM(LastYearSpendings)'}></CellDirective>
                                    <CellDirective formula={'=C12/D12'}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective>
                                <CellsDirective>
                                    <CellDirective index={1} value={'Number of Categories'} style={fontStyle} colSpan={2}></CellDirective>
                                    <CellDirective formula={'=COUNTA(Categories)'} index={3}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective>
                                <CellsDirective>
                                    <CellDirective index={1} value={'Average Spend'} style={fontStyle} colSpan={2}></CellDirective>
                                    <CellDirective formula={'=AVERAGE(MonthlySpendings)'} index={3} format={'$#,##0'}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective>
                                <CellsDirective>
                                    <CellDirective index={1} value={'Min Spend'} style={fontStyle} colSpan={2}></CellDirective>
                                    <CellDirective formula={"=MIN(MonthlySpendings)"} index={3} format={'$#,##0'}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective>
                                <CellsDirective>
                                    <CellDirective index={1} value={'Max Spend'} style={fontStyle} colSpan={2}></CellDirective>
                                    <CellDirective formula={"=MAX(MonthlySpendings)"} index={3} format={'$#,##0'}></CellDirective>
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
                        </ColumnsDirective>
                    </SheetDirective>
                </SheetsDirective>
                <DefinedNamesDirective>
                    <DefinedNameDirective name={'Categories'} refersTo={"=Budget Details!A3:A11"}> </DefinedNameDirective>
                    <DefinedNameDirective name={'MonthlySpendings'} refersTo={"=Budget Details!B3:B11"}> </DefinedNameDirective>
                    <DefinedNameDirective name={'AnnualSpendings'} refersTo={"=Budget Details!C3:C11"}> </DefinedNameDirective>
                </DefinedNamesDirective>
            </SpreadsheetComponent>
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);