import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef(null);
    
    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file && spreadsheetRef.current) {
            spreadsheetRef.current.open({ file: file });
        }
    };

    return (
        <div>
            <input type="file" accept=".xlsx" onChange={handleFileSelect} />
            <SpreadsheetComponent 
                ref={spreadsheetRef}
                allowOpen={true} />
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);