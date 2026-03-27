import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {

  return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <header style={{ height: '100px', textAlign: 'center' }}>Header Content</header>
            <main style={{ flex: 1, minHeight: 0 }}>
                <div style={{ height: '100%' }}>
                    <SpreadsheetComponent height="100%" width="100%" />
                </div>
            </main>
        </div>
    );
}


export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);