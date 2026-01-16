import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const beforeOpen = (args) => {
        args.parseOptions = {
            ignoreStyle: true,
            ignoreFormat: true,
            ignoreChart: true,
            ignoreImage: true,
            ignoreMergedCell: true,
            ignoreFormula: true,
            ignoreValidation: true,
            ignoreConditionalFormat: true,
        };
    };
    return (
        <SpreadsheetComponent allowOpen={true} openUrl='https://services.syncfusion.com/react/production/api/spreadsheet/open' beforeOpen={beforeOpen} />
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);