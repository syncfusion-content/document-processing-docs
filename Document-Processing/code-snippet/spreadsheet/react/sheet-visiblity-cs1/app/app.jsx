import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

function App() {
    const spreadsheetRef = React.useRef(null);
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            // Applies style formatting to active visible sheet
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
            spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:H11');
            // Applies style formatting to active hidden sheet
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Hidden Sheet!A1:H1');
            spreadsheet.cellFormat({ textAlign: 'center' }, 'Hidden Sheet!D2:H11');
        }
    }, []);

    return (
        <SpreadsheetComponent showFormulaBar={false} ref={spreadsheetRef} openUrl={"https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open"}
            saveUrl={"https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save"}>
            <SheetsDirective>
                <SheetDirective name='Visible Sheet' state={'Visible'}>
                    <RangesDirective>
                        <RangeDirective dataSource={data}></RangeDirective>
                    </RangesDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={150}></ColumnDirective>
                        <ColumnDirective width={110}></ColumnDirective>
                        <ColumnDirective width={110}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                    </ColumnsDirective>
                </SheetDirective>
                <SheetDirective name='Very Hidden Sheet' state={'VeryHidden'}>
                    <RangesDirective>
                        <RangeDirective dataSource={data}></RangeDirective>
                    </RangesDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={150}></ColumnDirective>
                        <ColumnDirective width={110}></ColumnDirective>
                        <ColumnDirective width={110}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                    </ColumnsDirective>
                </SheetDirective>
                <SheetDirective name='Hidden Sheet' state={'Hidden'}>
                    <RangesDirective>
                        <RangeDirective dataSource={data}></RangeDirective>
                    </RangesDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={150}></ColumnDirective>
                        <ColumnDirective width={110}></ColumnDirective>
                        <ColumnDirective width={110}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                        <ColumnDirective width={85}></ColumnDirective>
                    </ColumnsDirective>
                </SheetDirective>
            </SheetsDirective>
        </SpreadsheetComponent>
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);