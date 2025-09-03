import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, CellModel, SortEventArgs } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { DataUtil } from '@syncfusion/ej2-data';
import { tradeData } from './datasource';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    const mySortComparer = (x: CellModel, y: CellModel): number => {
        // custom sort comparer to sort based on the custom list.
        let customList: string[] = ['Perfect', 'Sufficient', 'Insufficient'];
        let comparer: Function = DataUtil.fnSort('Ascending');
        return comparer(x ? customList.indexOf(x.value as string) : x, y ? customList.indexOf(y.value as string) : y);
    };
    const onDataBound = (): void => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet && spreadsheet.activeSheetIndex === 0) {
            spreadsheet.sort({ sortDescriptors: { field: 'F', sortComparer: mySortComparer }, containsHeader: true }, 'A1:H20');
        }
    };
    const onSortComplete = (args: SortEventArgs): void => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.selectRange(args.range as string);
        }
    };

    return (
        <SpreadsheetComponent ref={spreadsheetRef} dataBound={onDataBound} sortComplete={onSortComplete}>
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

const root = createRoot(document.getElementById('root')!);
root.render(<App />);