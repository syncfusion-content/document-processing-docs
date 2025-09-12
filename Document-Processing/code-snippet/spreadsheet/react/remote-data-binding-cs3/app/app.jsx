import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef(null);
    const data = (new DataManager({ adaptor: new WebApiAdaptor(), url: 'https://services.syncfusion.com/react/production/api/Orders' }));
    React.useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        // Applies cell and number formatting to specified range of the active sheet
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:K1');
        }
    }, []);

    return (
        <SpreadsheetComponent ref={spreadsheetRef}>
            <SheetsDirective>
                <SheetDirective name='Order Details'>
                    <RangesDirective>
                        <RangeDirective dataSource={data}></RangeDirective>
                    </RangesDirective>
                    <ColumnsDirective>
                        <ColumnDirective width={80}></ColumnDirective>
                        <ColumnDirective width={80}></ColumnDirective>
                        <ColumnDirective width={80}></ColumnDirective>
                        <ColumnDirective width={80}></ColumnDirective>
                        <ColumnDirective width={80}></ColumnDirective>
                        <ColumnDirective width={80}></ColumnDirective>
                        <ColumnDirective width={280}></ColumnDirective>
                        <ColumnDirective width={180}></ColumnDirective>
                        <ColumnDirective width={80}></ColumnDirective>
                        <ColumnDirective width={180}></ColumnDirective>
                        <ColumnDirective width={180}></ColumnDirective>
                    </ColumnsDirective>
                </SheetDirective>
            </SheetsDirective>
        </SpreadsheetComponent>
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);