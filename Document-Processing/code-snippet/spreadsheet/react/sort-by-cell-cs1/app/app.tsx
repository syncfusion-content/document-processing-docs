import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, SortEventArgs } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    const onDataBound = (): void => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet && spreadsheet.activeSheetIndex === 0 && !spreadsheet.isOpen) {
            spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A1:H1');
            spreadsheet.sort({ containsHeader: true }, 'A1:H11');
        }
    };
    const onSortComplete = (args: SortEventArgs): void => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.selectRange(args.range as string);
        }
    };

    return (
        <SpreadsheetComponent ref={spreadsheetRef} dataBound={onDataBound} sortComplete={onSortComplete} >
            <SheetsDirective>
                <SheetDirective>
                    <RangesDirective>
                        <RangeDirective dataSource={defaultData}></RangeDirective>
                    </RangesDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={180}></ColumnDirective>
                        <ColumnDirective width={130}></ColumnDirective>
                        <ColumnDirective width={130}></ColumnDirective>
                    </ColumnsDirective>
                </SheetDirective>
            </SheetsDirective>
        </SpreadsheetComponent>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);