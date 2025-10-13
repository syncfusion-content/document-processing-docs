import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { tradeData } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    const onDataBound = () => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            if (spreadsheet.activeSheetIndex === 0) {
                let departments = ['Sweden', 'Canada', 'UK'];
                let predicateList = []
                departments.forEach((department) => { predicateList.push({ field: 'D', predicate: 'or', operator: 'equal', value: department }); })
                spreadsheet.applyFilter(predicateList);
            }
        }
    };

    return (
        <SpreadsheetComponent ref={spreadsheetRef} dataBound={onDataBound}>
            <SheetsDirective>
                <SheetDirective>
                    <RangesDirective>
                        <RangeDirective dataSource={tradeData}></RangeDirective>
                    </RangesDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={90}></ColumnDirective>
                        <ColumnDirective width={130}></ColumnDirective>
                        <ColumnDirective width={130}></ColumnDirective>
                    </ColumnsDirective>
                </SheetDirective>
            </SheetsDirective>
        </SpreadsheetComponent>
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);