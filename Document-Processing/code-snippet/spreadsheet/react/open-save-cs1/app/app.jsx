import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const beforeOpen = () => {};
    return (
        <SpreadsheetComponent allowOpen={true} openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open' beforeOpen={beforeOpen} />
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);