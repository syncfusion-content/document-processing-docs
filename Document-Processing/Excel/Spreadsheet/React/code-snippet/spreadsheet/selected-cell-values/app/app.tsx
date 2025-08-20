import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, SheetModel, RangeDirective, ColumnsDirective, ColumnDirective, cellModel, getRangeIndexes, getSwapRange, getRangeAddress } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    const created = (): void => {
        spreadsheetRef.current.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
    };
    const onClick = () => {
        let spreadsheet = spreadsheetRef.current;
        let sheet: SheetModel = spreadsheet.getActiveSheet();
        let selectedRange: string = sheet.selectedRange;
        let index: number[] = getRangeIndexes(selectedRange);
        let cellRange: number[] = getSwapRange(index);
        let swappedRange: string = getRangeAddress(cellRange);
        let valueObject: string[] = [];
        let range: string = sheet.name + '!' + swappedRange;
        // Get the collection of selected cell values by using the getData() method.
        spreadsheet.getData(range).then((cells: cellModel[]) => {
            cells.forEach((cell) => {
                valueObject.push(isNullOrUndefined(cell.value) ? '' : cell.value);
            });
            console.log("Collection of selected cell values:", valueObject);
        });
    }
    return (
        <div className='control-section spreadsheet-control'>
            <button className="e-btn custom-btn" onClick={onClick}> Get Selected Cell Values </button>
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