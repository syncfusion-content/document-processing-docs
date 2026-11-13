import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    let spreadsheet;
    
    const onCreated = () => {
        // Fetch Excel file from URL and open in spreadsheet
        fetch('https://cdn.syncfusion.com/downloads/spreadsheet/Sample.xlsx')
            .then((response) => response.blob())
            .then((fileBlob) => {
                const file = new File([fileBlob], 'Sample.xlsx');
                spreadsheet.open({ file });
            })
            .catch((error) => {
                console.error('Error loading file from URL:', error);
            });
    };
    
    return (
        <SpreadsheetComponent 
            ref={(scope) => { spreadsheet = scope; }}
            allowOpen={true}
            created={onCreated} />
    );
};

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);