import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, CellModel, getCellAddress } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    const cellsModel: CellModel[] = [{ value: 'Unit Price', style: { fontWeight: 'bold', textAlign: 'center' } }, { value: '18.00' },
    { value: '19.00' }, { value: '10.00' }, { value: '22.00' }, { value: '21.35' }, { value: '25.00' }, { value: '30.00' },
    { value: '21.00' }, { value: '40.00' }, { value: '97.00' }];
    const onCreated = (): void => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            // Applies style formatting before inserting the column
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A2:G2');
            // inserting a empty column at 0th index
            spreadsheet.insertColumn();
            // inserting 1 column at the 5th index with column model
            spreadsheet.insertColumn([{ index: 5, width: 90 }]);
            let rowIndex: number = 1;
            // Updating the 5th column data
            cellsModel.forEach((cell: CellModel) => {
                if (spreadsheet) {
                    spreadsheet.updateCell(cell, getCellAddress(rowIndex, 5)); rowIndex++;
                }
            });
            // Applies style formatting after the columns are inserted
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
                            <RangeDirective dataSource={data} startCell={"A2"}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
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

const root = createRoot(document.getElementById('root')!);
root.render(<App />);