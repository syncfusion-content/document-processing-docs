import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef(null);
    const onContextMenuBeforeOpen = () => {
        let spreadsheet = spreadsheetRef.current;
        // To remove existing context menu items.
        if (spreadsheet) {
            spreadsheet.removeContextMenuItems(['Insert Column'], false);
        }
    };

    return (<SpreadsheetComponent ref={spreadsheetRef} contextMenuBeforeOpen={onContextMenuBeforeOpen} />);
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);