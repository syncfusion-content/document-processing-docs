import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
            spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:H11');
            // The gridlines have been removed to set border for the range of cells
            spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A1:H11');
        }
    }, []);

    return (
        <SpreadsheetComponent ref={spreadsheetRef} showFormulaBar={false}>
            <SheetsDirective>
                <SheetDirective name='Price Details' showGridLines={false} showHeaders={false}>
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