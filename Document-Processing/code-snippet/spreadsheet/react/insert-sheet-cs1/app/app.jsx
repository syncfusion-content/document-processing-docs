import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    React.useEffect(() => {
        const insSheetModel = [{
            index: 1,
            name: 'Inserted Sheet',
            ranges: [{ dataSource: data }],
            columns: [
                { width: 150 },
                { width: 110 },
                { width: 110 },
                { width: 85 },
                { width: 85 },
                { width: 85 },
                { width: 85 },
                { width: 85 },
            ]
        }];
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            // Applies style formatting to the active sheet before inserting a new sheet
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
            spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:H11');
            // inserting a new sheet with data at 1st index
            // You can also insert empty sheets by specifying the start and end sheet index instead of sheet model
            spreadsheet.insertSheet(insSheetModel);
            // Applies style formatting for the inserted sheet
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Inserted Sheet!A1:H1');
            spreadsheet.cellFormat({ textAlign: 'center' }, 'Inserted Sheet!D2:H11');
        }
    }, []);

    return (
        <SpreadsheetComponent showRibbon={false} ref={spreadsheetRef} showFormulaBar={true}>
            <SheetsDirective>
                <SheetDirective name="Price Details">
                    <RangesDirective>
                        <RangeDirective dataSource={data}></RangeDirective>
                    </RangesDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={150}></ColumnDirective>
                        <ColumnDirective width={110}></ColumnDirective>
                        <ColumnDirective width={110}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                    </ColumnsDirective>
                </SheetDirective>
            </SheetsDirective>
        </SpreadsheetComponent>
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);