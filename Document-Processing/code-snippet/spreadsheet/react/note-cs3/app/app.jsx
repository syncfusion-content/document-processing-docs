import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective, CellsDirective, CellDirective  } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    function onCreated() {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:H1');
        }
    }

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} allowOpen={true} allowSave={true} openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open' saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save' created={onCreated.bind(this)}>
                <SheetsDirective>
                    <SheetDirective name="Price Details">
                        <RangesDirective>
                            <RangeDirective dataSource={data}></RangeDirective>
                        </RangesDirective>
                        <RowsDirective>
                            <RowDirective index={2}>
                                <CellsDirective>
                                    <CellDirective index={0} notes={"These shoes have the highest sales in terms of quantity this month."}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                            <RowDirective index={5}>
                                <CellsDirective>
                                    <CellDirective index={0} notes={"These shoes have been the most profitable this month."}></CellDirective>
                                </CellsDirective>
                            </RowDirective>
                        </RowsDirective>
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

const root = createRoot(document.getElementById('root'));
root.render(<App />);