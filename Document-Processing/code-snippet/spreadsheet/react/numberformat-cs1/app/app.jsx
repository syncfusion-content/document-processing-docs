import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective, getFormatFromType } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    const styles = {
        verticalAlign: 'middle', textAlign: 'center', fontSize: '16pt', fontWeight: 'bold',
        border: '1px solid #e0e0e0', backgroundColor: '#EEEEEE', color: '#279377'
    };
    const cellStyle = { fontWeight: 'bold', fontStyle: 'italic' };
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', fontSize: '12pt', backgroundColor: '#279377', textAlign: 'center', color: '#ffffff', borderBottom: '1px solid #e0e0e0' }, 'A2:F2');
            spreadsheet.cellFormat({ borderTop: '1px solid #e0e0e0', backgroundColor: '#EEEEEE' }, 'A11:F11');
            spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A2:F11', 'Outer');
            // Applied Accounting format to the cells from C3 to E10 range.
            spreadsheet.numberFormat('_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)', 'C3:E10');
            // Applied Percentage format to the cells from C3 to E11 range.
            spreadsheet.numberFormat('0%', 'F3:F10');
            // applied the custom number format for cell form D3 to D10 range
            spreadsheet.numberFormat('[Red][<=2000]$#,##0.00;[Blue][>2000]$#,##0.00', 'D3:D10');
            // applied the custom number format for cell from F3 to F10 range
            spreadsheet.numberFormat('#,##0.00_);[Red](#,##0.00)', 'F3:F10');
        }
    }, []);

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} showSheetTabs={false} showFormulaBar={false} allowInsert={false} allowDelete={false}>
                <SheetsDirective>
                    <SheetDirective selectedRange={"U15"} showGridLines={false}>
                        <RowsDirective>
                            <RowDirective height={35} customHeight={true}>
                                <CellsDirective>
                                    <CellDirective value={'Sales Team Summary'} style={styles} colSpan={6}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={10}>
                                <CellsDirective>
                                    <CellDirective index={1} value={'Total:'} style={cellStyle}></CellDirective>
                                    <CellDirective formula={'=SUM(C3:C10)'} format={getFormatFromType('Accounting')}></CellDirective>
                                    <CellDirective formula={'=SUM(D3:D10)'} format={'_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)'}></CellDirective>
                                    <CellDirective formula={'=SUM(E3:E10)'} format={'_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)'}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                        </RowsDirective>
                        <RangesDirective>
                            <RangeDirective dataSource={data} startCell={"A2"}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={140}></ColumnDirective>
                            <ColumnDirective width={140}></ColumnDirective>
                            <ColumnDirective width={160}></ColumnDirective>
                            <ColumnDirective width={160}></ColumnDirective>
                            <ColumnDirective width={160}></ColumnDirective>
                            <ColumnDirective width={120}></ColumnDirective>
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