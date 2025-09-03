import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
            // Unhide the 2nd index hidden column
            spreadsheet.hideColumn(1, 1, false);
            // Unhide the 3rd index hidden row
            spreadsheet.hideRow(3, 3, false);
            // Hiding the 6th index column
            spreadsheet.hideColumn(6);
            // Hiding the 8th and 9th index row
            spreadsheet.hideRow(8, 9);
            spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:H11');
        }
    }, []);

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} showSheetTabs={false} showRibbon={false} showFormulaBar={false} >
                <SheetsDirective>
                    <SheetDirective>
                        <RangesDirective>
                            <RangeDirective dataSource={data}></RangeDirective>
                        </RangesDirective>
                        <RowsDirective>
                            <RowDirective index={2} hidden={true}></RowDirective>
                            <RowDirective hidden={true}></RowDirective>
                        </RowsDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={150}></ColumnDirective>
                            <ColumnDirective width={100} hidden={true}></ColumnDirective>
                            <ColumnDirective width={100} hidden={true}></ColumnDirective>
                            <ColumnDirective width={80}></ColumnDirective>
                            <ColumnDirective width={80}></ColumnDirective>
                            <ColumnDirective width={80}></ColumnDirective>
                            <ColumnDirective width={80}></ColumnDirective>
                            <ColumnDirective width={80}></ColumnDirective>
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