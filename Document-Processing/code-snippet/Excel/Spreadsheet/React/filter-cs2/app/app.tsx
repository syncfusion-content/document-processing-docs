import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, ExtendedRowModel, UsedRangeModel, SheetModel, RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { PredicateModel } from '@syncfusion/ej2-react-grids';
import { defaultData } from './datasource';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    const created = (): void => {
        spreadsheetRef.current.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
        // Construct the predicate model to be updated to the data.
        let predicates: PredicateModel[] = [{
            field: 'C',
            operator: 'equal',
            value: 'Pink',
            matchCase: false
        }];
        // Apply filter to the specified range.
        spreadsheetRef.current.applyFilter(predicates, 'A1:C7');
    };
    const onClick = () => {
        let spreadsheet = spreadsheetRef.current;
        let activeSheet: SheetModel = spreadsheet.getActiveSheet();
        let usedRange: UsedRangeModel = activeSheet.usedRange;
        for (let i: number = 0; i <= usedRange.rowIndex; i++) {
            // Get the filtered row using isFiltered property.
            let filteredRow: Object = (activeSheet.rows[i] as ExtendedRowModel).isFiltered;
            if (!filteredRow) {
                let rowData: Object = spreadsheet.getRowData(i);
                console.log("Row:", i + 1, "Cells", rowData);
            }
        }
    }
    return (
        <div className='control-section spreadsheet-control'>
            <button className="e-btn custom-btn" onClick={onClick}> Get Filtered Data </button>
            <SpreadsheetComponent ref={spreadsheetRef} created={created}>
                <SheetsDirective>
                    <SheetDirective>
                        <RangesDirective>
                            <RangeDirective dataSource={defaultData}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={180}></ColumnDirective>
                            <ColumnDirective width={130}></ColumnDirective>
                            <ColumnDirective width={130}></ColumnDirective>
                            <ColumnDirective width={180}></ColumnDirective>
                            <ColumnDirective width={130}></ColumnDirective>
                            <ColumnDirective width={120}></ColumnDirective>
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