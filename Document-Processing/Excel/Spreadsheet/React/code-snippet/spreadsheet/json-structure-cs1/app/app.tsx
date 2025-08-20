import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { jsonData } from './datasource';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    const onCreated = (): void => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.openFromJson({ file: jsonData });
        }
    };

    return (<SpreadsheetComponent ref={spreadsheetRef} created={onCreated}></SpreadsheetComponent>);
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);