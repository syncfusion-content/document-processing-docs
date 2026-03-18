import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {

  return (
        <div style={{ height: '80vh' }}>
            <SpreadsheetComponent height="100%" width="100%" />
        </div>
    );
}


export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);