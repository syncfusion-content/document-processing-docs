import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    const rowsModel = [{
        index: 9, // Need to specify the index for the first row collection, the specified rows will be inserted in this index.
        cells: [{ value: '' }, { value: '8' }, { value: 'Northwoods Cranberry Sauce' }, { value: '3' }, { value: '12 - 12 oz jars' },
        { value: '40.00' }, { value: '6' }, { value: 'false' }]
    },
    {
        cells: [{ value: '' }, { value: '9' }, { value: 'Mishi Kobe Niku' }, { value: '4' }, { value: '18 - 500 g pkgs.' }, { value: '97.00' }, { value: '29' }, { value: 'true' }]
    }];
    const onCreated = () => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            // Applies style formatting before inserting the rows
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'B1:H1');
            // inserting a empty row at 0th index
            spreadsheet.insertRow();
            // inserting 2 rows at the 9th index with data
            spreadsheet.insertRow(rowsModel);
            // Applies style formatting after the rows are inserted
            spreadsheet.cellFormat({ textAlign: 'center' }, 'B3:B12');
            spreadsheet.cellFormat({ textAlign: 'center' }, 'D3:D12');
            spreadsheet.cellFormat({ textAlign: 'center' }, 'F3:H12');
        }
    };

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} created={onCreated} showSheetTabs={false} showRibbon={false} showFormulaBar={false} >
                <SheetsDirective>
                    <SheetDirective>
                        <RangesDirective>
                            <RangeDirective dataSource={data} startCell={"B1"}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={20}></ColumnDirective>
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