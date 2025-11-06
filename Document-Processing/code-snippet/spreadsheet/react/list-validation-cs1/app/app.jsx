import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, ColumnsDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RowsDirective, RowDirective, CellsDirective, CellDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet'
import { defaultData, groupData } from './datasource';

function App() {
    let spreadsheet;
    const onCreated = () => {
        // Apply styles to the specified range in the active sheet.
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:B1');
        //Pass the value1 as the reference of cell range to provide more values.
        spreadsheet.addDataValidation(
            {
                type: 'List',
                inCellDropDown: true,
                value1: '=List Validation source!$B$2:$B$41',
            },
            'B2:B30'
        );
    };

    return (
        <div>
            <SpreadsheetComponent openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'
                saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save' ref={(ssObj) => { spreadsheet = ssObj; }} created={onCreated.bind(this)}>
                <SheetsDirective>
                    <SheetDirective name="Car Sales Report">
                        <RangesDirective>
                            <RangeDirective dataSource={defaultData}></RangeDirective>
                        </RangesDirective>
                        <RowsDirective>
                            <RowDirective index={0}>
                                <CellsDirective>
                                    <CellDirective index={1} value="Group Id"></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                        </RowsDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={180}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                        </ColumnsDirective>
                    </SheetDirective>
                    <SheetDirective name="List Validation source">
                        <RangesDirective>
                            <RangeDirective dataSource={groupData}></RangeDirective>
                        </RangesDirective>
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);