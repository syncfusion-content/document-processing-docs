import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    
    const openFromUrl = (): void => {
        fetch('https://cdn.syncfusion.com/downloads/spreadsheet/Sample.xlsx')
            .then(response => response.blob())
            .then(blob => {
                const file = new File([blob], 'Sample.xlsx', { type: blob.type });
                if (spreadsheetRef.current) {
                    spreadsheetRef.current.open({ file: file });
                }
            })
            .catch(error => {
                console.error('Error loading file from URL:', error);
            });
    };

    return (
        <div>
            <button onClick={openFromUrl}>Open from URL</button>
            <SpreadsheetComponent 
                ref={spreadsheetRef}
                allowOpen={true} />
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);