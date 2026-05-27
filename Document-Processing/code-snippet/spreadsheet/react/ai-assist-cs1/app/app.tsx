import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { grossPay } from './datasource';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

    const aiAssistSettings = {
        requestUrl: 'https://localhost:{port}/api/AIAssist/Chat',
        placeholder: 'Ask the AI about this sheet...',
        promptSuggestions: [
            'Generate report',
            'Analyze this dataset and summarize',
            'Format this sheet for better readability'
        ]
    };

    function onCreated() {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Gross Pay!A1:I1');
        }
    }

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} enableAIAssist={true} aiAssistSettings={aiAssistSettings} openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open' saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save' created={onCreated.bind(this)}>
                <SheetsDirective>
                    <SheetDirective name="Gross Pay">
                        <RangesDirective>
                            <RangeDirective dataSource={grossPay}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={130}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={90}></ColumnDirective>
                            <ColumnDirective width={90}></ColumnDirective>
                            <ColumnDirective width={90}></ColumnDirective>
                            <ColumnDirective width={110}></ColumnDirective>
                            <ColumnDirective width={170}></ColumnDirective>
                            <ColumnDirective width={210}></ColumnDirective>
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