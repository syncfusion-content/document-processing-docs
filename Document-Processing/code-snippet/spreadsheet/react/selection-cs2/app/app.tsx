import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, getRangeAddress } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { budgetData } from './datasource';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:D1');
            let rowCount: number = spreadsheet.getActiveSheet().rowCount as number;
            spreadsheet.selectRange(getRangeAddress([0, 2, rowCount, 2]));
        }
    }, []);

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} selectionSettings={{ mode: 'Multiple' }}>
                <SheetsDirective>
                    <SheetDirective>
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
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);