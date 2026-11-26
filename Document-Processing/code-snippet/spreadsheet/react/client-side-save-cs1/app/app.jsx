import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { salesData } from './data';
import {
    RangeDirective,
    RangesDirective,
    SheetDirective,
    SheetsDirective,
    SpreadsheetComponent
} from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef(null);

    const saveFile = () => {
        if (spreadsheetRef.current) {
            spreadsheetRef.current.save({
                fileName: 'Worksheet.xlsx',
                saveType: 'Xlsx'
            });
        }
    };

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef}>
                <SheetsDirective>
                    <SheetDirective name="Car Sales Report">
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>

            <button type="button" onClick={saveFile}>
                Save as XLSX
            </button>
        </div>
    );
}

export default App;

const rootElement = document.getElementById('spreadsheet');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
}