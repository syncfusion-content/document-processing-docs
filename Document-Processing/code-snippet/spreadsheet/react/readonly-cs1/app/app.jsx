import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective, ColumnsDirective, ColumnDirective, RowsDirective, RowDirective, CellsDirective, CellDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';
function App() {
  const spreadsheetRef = React.useRef(null);
  const readOnlyRow = () => {
    let spreadsheet = spreadsheetRef.current;
    spreadsheet.setRangeReadOnly(true, '2:2', spreadsheet.activeSheetIndex);
  }
  const readOnlyCol = () => {
    let spreadsheet = spreadsheetRef.current;
    spreadsheet.setRangeReadOnly(true, 'A:A', spreadsheet.activeSheetIndex);
  }
  const readOnlyCell = () => {
    let spreadsheet = spreadsheetRef.current;
    spreadsheet.setRangeReadOnly(true, 'E5:E5', spreadsheet.activeSheetIndex);
  }
  const removeReadOnly = () => {
    let spreadsheet = spreadsheetRef.current;
    spreadsheet.setRangeReadOnly(false, '2:2', spreadsheet.activeSheetIndex);
    spreadsheet.setRangeReadOnly(false, 'A:A', spreadsheet.activeSheetIndex);
    spreadsheet.setRangeReadOnly(false, 'E5:E5', spreadsheet.activeSheetIndex);
  }
  return (
    <div className='control-section spreadsheet-control'>
            <button className="e-btn custom-btn" onClick={readOnlyRow}>Make Row 2 readOnly</button>
            <button className="e-btn custom-btn" onClick={readOnlyCol}>Make Column A readOnly</button>
            <button className="e-btn custom-btn" onClick={readOnlyCell}>Make E5 cell readOnly</button>
            <button className="e-btn custom-btn" onClick={removeReadOnly}>Remove readOnly</button>
                <SpreadsheetComponent height={300} openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'  ref={spreadsheetRef} >
                    <SheetsDirective>
                        <SheetDirective name="Car Sales Report">
                            <RangesDirective>
                                <RangeDirective dataSource={data}></RangeDirective>
                            </RangesDirective>
                            <RowsDirective>
                                <RowDirective index={3} isReadOnly={true}></RowDirective>
                                <RowDirective index={4}>
                                    <CellsDirective>
                                        <CellDirective index={5} isReadOnly={true}></CellDirective>
                                    </CellsDirective>
                                </RowDirective>
                            </RowsDirective>
                            <ColumnsDirective>
                                <ColumnDirective width={180}></ColumnDirective>
                                <ColumnDirective width={130}></ColumnDirective>
                                <ColumnDirective isReadOnly={true} width={130}></ColumnDirective>
                                <ColumnDirective width={180}></ColumnDirective>
                                <ColumnDirective width={130}></ColumnDirective>
                                <ColumnDirective width={120}></ColumnDirective>
                            </ColumnsDirective>
                        </SheetDirective>
                    </SheetsDirective>
                </SpreadsheetComponent>
            </div>
  );
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
