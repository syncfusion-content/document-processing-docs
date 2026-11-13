import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef(null);
    
    const handleSaveAsBlob = () => {
        if (spreadsheetRef.current) {
            spreadsheetRef.current.save({
                fileName: 'MySpreadsheet',
                saveType: 'Xlsx',
                needBlobData: true
            });
        }
    };

    const onSaveComplete = (args) => {
        if (args.blobData) {
            // Handle blob data - e.g., send to server, store locally, etc.
            console.log('Blob data received:', args.blobData);
        }
    };

    return (
        &lt;div&gt;
            &lt;button onClick={handleSaveAsBlob}&gt;Save as Blob&lt;/button&gt;
            &lt;SpreadsheetComponent 
                ref={spreadsheetRef}
                allowSave={true}
                saveComplete={onSaveComplete}
                // Note: saveUrl is omitted for client-side export
            /&gt;
        &lt;/div&gt;
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(&lt;App /&gt;);