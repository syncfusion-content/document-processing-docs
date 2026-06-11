import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { CellStyleModel } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    const styles: CellStyleModel = { fontFamily: 'Axettac Demo', verticalAlign: 'middle', textAlign: 'center', fontSize: '18pt', fontWeight: 'bold', color: '#279377', border: '1px solid #e0e0e0' };
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            // Setting common styles to table header cells
            spreadsheet.cellFormat({ fontWeight: 'bold', fontSize: '12pt', backgroundColor: '#279377', color: '#ffffff' }, 'A2:E2');
            // Setting common styles to whole table cells
            spreadsheet.cellFormat({ verticalAlign: 'middle', fontFamily: 'Axettac Demo' }, 'A2:E12');
            // Column wise styles setting
            spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:A12');
            // Setting text-indent to 2 and 4 column
            let style: CellStyleModel = { textAlign: 'left', textIndent: '8pt' };
            spreadsheet.cellFormat(style, 'B2:B12');
            spreadsheet.cellFormat(style, 'D2:D12');
            spreadsheet.cellFormat({ fontStyle: 'italic', textAlign: 'right' }, 'C3:C12');
            spreadsheet.cellFormat({ textAlign: 'center' }, 'E2:E12');
            // Applied border to range of cells using 'setBorder' method
            spreadsheet.setBorder({ borderLeft: '1px solid #e0e0e0', borderRight: '1px solid #e0e0e0' }, 'A2:E2');
            spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A4:E11', 'Horizontal');
            spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A3:E12', 'Outer');
            spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E3:E4');
            spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E9');
            spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E12');
            spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E5');
            spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E8');
            spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E11');
            spreadsheet.cellFormat({ color: '#62c9e8' }, 'E6');
            spreadsheet.cellFormat({ color: '#62c9e8' }, 'E10');
            spreadsheet.cellFormat({ color: '#ff5b5b' }, 'E7');
        }
    }, []);

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} showRibbon={false} showFormulaBar={false} showSheetTabs={false} allowEditing={false} allowDelete={false} allowInsert={false} >
                <SheetsDirective>
                    <SheetDirective selectedRange={"U15"} showGridLines={false}>
                        <RowsDirective>
                            <RowDirective height={40} customHeight={true}>
                                <CellsDirective>
                                    <CellDirective colSpan={5} value={'Order Summary'} style={styles}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                        </RowsDirective>
                        <RangesDirective>
                            <RangeDirective dataSource={data} startCell={'A2'}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={200}></ColumnDirective>
                            <ColumnDirective width={110}></ColumnDirective>
                            <ColumnDirective width={140}></ColumnDirective>
                            <ColumnDirective width={90}></ColumnDirective>
                        </ColumnsDirective>
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);