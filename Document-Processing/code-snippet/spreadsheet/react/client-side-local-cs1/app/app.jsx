import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, Uploader } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    let spreadsheet;
    
    const onCreated = () => {
        spreadsheet = spreadsheet;
    };
    
    const onSuccess = (args) => {
        // Upload complete, open the file in spreadsheet
        spreadsheet.open({ file: args.file });
    };
    
    return (
        <div>
            {/* File uploader for local file selection */}
            <Uploader 
                autoUpload={false} 
                success={onSuccess} 
                allowedExtensions='.xlsx' />
            
            {/* Spreadsheet component with client-side import enabled */}
            <SpreadsheetComponent 
                ref={(scope) => { spreadsheet = scope; }}
                allowOpen={true}
                created={onCreated} />
        </div>
    );
};

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);