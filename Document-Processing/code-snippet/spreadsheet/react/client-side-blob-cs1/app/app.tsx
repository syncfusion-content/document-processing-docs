import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    
    const openFromBlob = (): void => {
        // Example: Creating a Blob from string data (in real scenario, this could be from an API response)
        const data = 'Sample Excel data';
        const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const file = new File([blob], 'Sample.xlsx');
        
        if (spreadsheetRef.current) {
            spreadsheetRef.current.open({ file: file });
        }
    };

    return (
        <div>
            <button onClick={openFromBlob}>Open from Blob Data</button>
            <SpreadsheetComponent 
                ref={spreadsheetRef}
                allowOpen={true} />
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);