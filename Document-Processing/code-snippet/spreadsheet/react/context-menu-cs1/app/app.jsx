import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef(null);
    const onContextMenuBeforeOpen = (args) => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet && args.element.id === spreadsheet.element.id + '_contextmenu') {
            spreadsheet.addContextMenuItems([{ text: 'Custom Item' }], 'Paste Special', false);  //To pass the items, Item before / after that the element to be inserted, Set false if the items need to be inserted before the text.
        }
    };

    return (<SpreadsheetComponent ref={spreadsheetRef} contextMenuBeforeOpen={onContextMenuBeforeOpen} />);
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);