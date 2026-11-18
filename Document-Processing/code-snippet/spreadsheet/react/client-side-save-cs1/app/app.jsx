import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef(null);
    
    const handleSave = () => {
        if (spreadsheetRef.current) {
            spreadsheetRef.current.save({
                fileName: 'MySpreadsheet',
                saveType: 'Xlsx'
            });
        }
    };

    return (
        &lt;div&gt;
            &lt;button onClick={handleSave}&gt;Save Spreadsheet&lt;/button&gt;
            &lt;SpreadsheetComponent 
                ref={spreadsheetRef}
                allowSave={true}
                // Note: saveUrl is omitted for client-side export
            /&gt;
        &lt;/div&gt;
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(&lt;App /&gt;);