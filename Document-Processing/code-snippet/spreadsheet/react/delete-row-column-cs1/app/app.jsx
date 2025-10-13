import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    const onCreated = () => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
            // deleting the rows from 8th to 10th index. To delete row, the third argument of enum type is passed as 'Row', the last argument specifies the sheet name or index in which the delete operation will perform. By default,active sheet will be considered. It is applicable only for model type Row and Column.
            spreadsheet.delete(8, 10, 'Row', 0); // startIndex, endIndex, Row, sheet index
            // deleting the 2nd and 5th indexed columns
            spreadsheet.delete(2, 2, 'Column', 'Sheet2');
            spreadsheet.delete(5, 5, 'Column');
            spreadsheet.delete(0, 0, "Sheet"); // delete the first sheet. sheet index starts from 0
            // Applies style formatting after deleted the rows and columns
            spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:A8');
            spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:G8');
        }
    };

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} created={onCreated} showRibbon={false} showFormulaBar={false} allowDelete={true} >
                <SheetsDirective>
                    <SheetDirective name={"Sheet1"}>
                        <RangesDirective>
                            <RangeDirective dataSource={data}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={90}></ColumnDirective>
                            <ColumnDirective width={220}></ColumnDirective>
                            <ColumnDirective width={90}></ColumnDirective>
                            <ColumnDirective width={140}></ColumnDirective>
                            <ColumnDirective width={90}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                        </ColumnsDirective>
                    </SheetDirective>
                    <SheetDirective name={"Sheet2"}>
                        <RangesDirective>
                            <RangeDirective dataSource={data}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={90}></ColumnDirective>
                            <ColumnDirective width={220}></ColumnDirective>
                            <ColumnDirective width={90}></ColumnDirective>
                            <ColumnDirective width={140}></ColumnDirective>
                            <ColumnDirective width={90}></ColumnDirective>
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