import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';

function App() {
    const [customParams, setCustomParams] = React.useState({});
    const beforeSave = (args) => {
        setCustomParams({ customParams: 'you can pass custom params in server side' });
        args.customParams = customParams; // you can pass the custom params
    };

    return (
        <SpreadsheetComponent allowSave={true} saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save' beforeSave={beforeSave}>
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

const root = createRoot(document.getElementById('root'));
root.render(<App />);