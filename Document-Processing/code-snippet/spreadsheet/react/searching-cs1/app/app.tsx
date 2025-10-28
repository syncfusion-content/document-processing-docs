import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { budgetData, defaultData } from './datasource';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    const onDataBound = (): void => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
            spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A11:D11');
        }
    };

    return (
        <SpreadsheetComponent allowFindAndReplace={true} ref={spreadsheetRef} dataBound={onDataBound}>
            <SheetsDirective>
                <SheetDirective name='Price Details'>
                    <RangesDirective>
                        <RangeDirective dataSource={defaultData}></RangeDirective>
                    </RangesDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={130}></ColumnDirective>
                        <ColumnDirective width={92}></ColumnDirective>
                        <ColumnDirective width={96}></ColumnDirective>
                    </ColumnsDirective>
                </SheetDirective>
                <SheetDirective name='Budget'>
                    <RangesDirective>
                        <RangeDirective dataSource={budgetData}></RangeDirective>
                    </RangesDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={130}></ColumnDirective>
                        <ColumnDirective width={92}></ColumnDirective>
                        <ColumnDirective width={96}></ColumnDirective>
                    </ColumnsDirective>
                </SheetDirective>
            </SheetsDirective>
        </SpreadsheetComponent>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);